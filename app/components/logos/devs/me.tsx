import Image from "next/image";

const Me = () => (
  <div className="flex flex-col items-center space-y-2">
    <Image
      src="/imgs/me.png"
      alt="TheCukitoDev"
      width={80}
      height={80}
      className="rounded-full "
    />
    <span className="text-md font-bold text-muted-foreground">
      TheCukitoDev
    </span>
  </div>
);

export default Me;
