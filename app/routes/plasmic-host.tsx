import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/react-web/lib/host";
import { MySpecialComponent } from "~/components/MySpecialComponent";

export default function PlasmicHost() {
  registerComponent(MySpecialComponent, {
    name: "MySpecialComponent",
    props: {
      children: "slot"
    },
    importPath: "./app/components/MySpecialComponent",
    importName: "MySpecialComponent"
  });
  
  return <PlasmicCanvasHost />
}