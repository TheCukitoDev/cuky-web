import Link from "next/link";
import { Button } from "./ui/button";

export function ReturnButton() {
  return (
    <Button color="#4CAF50" className="cursor-pointer">
      <Link href={"/"}>Return home</Link>
    </Button>
  );
}
