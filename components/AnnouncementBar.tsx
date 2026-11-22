import { Icon } from "./Icon";

export function AnnouncementBar() {
  return (
    <div className="bg-evergreen text-ivory text-center text-[13px] tracking-wide py-2.5 px-4 flex items-center justify-center gap-2">
      <Icon name="snowflake" size={13} className="text-gold shrink-0" />
      Free US Shipping • Gift-Ready Packaging
      <Icon name="snowflake" size={13} className="text-gold shrink-0" />
    </div>
  );
}
