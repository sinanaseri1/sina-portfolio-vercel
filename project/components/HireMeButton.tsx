"use client";
import { useRive, Layout, Fit } from "@rive-app/react-canvas";
import Link from "next/link";

export function HireMeButton() {
  const { RiveComponent, rive } = useRive({
    src: "/rive/hire_me.riv", // drop your exported Rive file here
    stateMachines: "State Machine 1", // name as exported in Rive
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain }),
  });

  return (
    <Link href="/contact" aria-label="Hire me">
      <div
        onMouseEnter={() => rive?.fireState("State Machine 1", "Hover")}
        onMouseLeave={() => rive?.fireState("State Machine 1", "Idle")}
        className="h-16 w-48 cursor-pointer"
      >
        <RiveComponent />
      </div>
    </Link>
  );
}
