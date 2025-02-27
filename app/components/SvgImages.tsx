import Image from "next/image";

// ../../public

export const LogoEdcs = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/Edcslogo.svg"}
      width={75}
      height={45}
      className={className ?? ""}
    />
  );
};
export const TopEdcsImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/topSvgEdcs.svg"}
      width={1600}
      height={720}
      className={className ?? ""}
    />
  );
};
export const DrawerForMobile = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/drawer.svg"}
      width={25}
      height={26}
      className={className ?? ""}
    />
  );
};


// Toogle Images at third container
export const WhatEdcsImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/whatedcs.svg"}
      width={616}
      height={296}
      className={className ?? ""}
    />
  );
}
export const ChedCommissionImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/edcs-commission.png"}
      width={616}
      height={50}
      className={className ?? ""}
    />
  );
}
export const RoundedCheckImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/rounded-check.svg"}
      width={15}
      height={15}
      className={className ?? ""}
    />
  );
};
export const RedRoundedCheckImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/red-check.svg"}
      width={15}
      height={15}
      className={className ?? ""}
    />
  );
};
export const EdcsUsersOptionsImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/edcs-users.png"}
      width={616}
      height={30}
      className={className ?? ""}
    />
  );
};
export const EdcsUsersBenefitImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/use-edcs.svg"}
      width={616}
      height={45}
      className={className ?? ""}
    />
  );
};export const HeroSectionDashboardImage = ({ className }: { className: string }) => {
  return (
    <Image
      alt="EDCS"
      src={"/_home/hero-section.svg"}
      width={1080}
      height={351}
      className={className ?? ""}
    />
  );
};

