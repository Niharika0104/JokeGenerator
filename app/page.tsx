import Image from "next/image";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import Co from "./Components/Co";
export default function Home() {
  return (
    <CopilotKit runtimeUrl="/api/copilot/openai/">
          <CopilotSidebar instructions="Help the user generate jokes on any topic."
        defaultOpen={true}
        labels={{
          title: "Memist Copilot",
          initial:
            "Hi you! 👋 I can help you generate jokes on any topic.",
        }}
        clickOutsideToClose={false}><Co/></CopilotSidebar>
        </CopilotKit>
  );
}
