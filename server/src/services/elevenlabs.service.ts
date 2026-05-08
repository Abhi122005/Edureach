interface CallPayload {
  phoneNumber: string;
  userName: string;
  userEmail: string;
  preferredCourse?: string;
  queryTopic?: string;
}

interface ElevenLabsCallResponse {
  success: boolean;
  message: string;
  conversation_id: string | null;
  callSid: string | null;
  [key: string]: unknown;
}

export const initiateOutboundCall = async (payload: CallPayload): Promise<ElevenLabsCallResponse> => {
  const { phoneNumber, userName, userEmail, preferredCourse, queryTopic } = payload;

  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  const ELEVENLABS_AGENT_PHONE_NUMBER_ID = process.env.ELEVENLABS_AGENT_PHONE_NUMBER_ID;
  const ELEVENLABS_AGENT_ID = process.env.ELEVENLABS_AGENT_ID;

  if (!ELEVENLABS_API_KEY || !ELEVENLABS_AGENT_PHONE_NUMBER_ID || !ELEVENLABS_AGENT_ID) {
    throw new Error(
      "ElevenLabs configuration missing. Check ELEVENLABS_API_KEY, ELEVENLABS_AGENT_PHONE_NUMBER_ID, ELEVENLABS_AGENT_ID in .env",
    );
  }

  // Ensure the recipient number is in E.164 format for telephony providers.
  const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber.replace(/^0+/, "")}`;

  const response = await fetch("https://api.elevenlabs.io/v1/convai/twilio/outbound-call", {
    method: "POST",
    headers: {
      "xi-api-key": ELEVENLABS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agent_id: ELEVENLABS_AGENT_ID,
      agent_phone_number_id: ELEVENLABS_AGENT_PHONE_NUMBER_ID,
      to_number: formattedPhone,
      conversation_initiation_client_data: {
        dynamic_variables: {
          student_name: userName,
          student_email: userEmail,
          preferred_course: preferredCourse || "Not specified",
          query_topic: queryTopic || "General inquiry",
        },
        conversation_config_override: {
          agent: {
            first_message: `Hi ${userName}, this is Ava from EduReach College. I'm calling to help you with information about ${preferredCourse || "our programs"}. Do you have a quick moment?`,
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("ElevenLabs API Error:", errorData);
    throw new Error(`ElevenLabs call failed with status ${response.status}: ${JSON.stringify(errorData)}`);
  }

  return (await response.json()) as ElevenLabsCallResponse;
};
