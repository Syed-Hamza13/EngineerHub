import JitsiRoom from "./JitsiRoom";

function MeetingsTab() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 h-full">
      <JitsiRoom roomName="EngineerHubDemoRoom" />
    </div>
  );
}

export default MeetingsTab;