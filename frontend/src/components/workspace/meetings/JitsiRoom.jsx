import { JitsiMeeting } from "@jitsi/react-sdk";

function JitsiRoom({ roomName }) {
  return (
    <div className="h-[80vh] w-full">
      <JitsiMeeting
        roomName={roomName}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%";
          iframeRef.style.width = "100%";
        }}
      />
    </div>
  );
}

export default JitsiRoom;