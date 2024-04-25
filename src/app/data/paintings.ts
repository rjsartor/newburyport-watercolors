export type Painting = {
  path: string;
  name: string;
  details: string;
  price?: number;
  etsyUrl?: string;
  slide?: boolean;
}

export const PAINTINGS = [
  { path: "/paintings/sashimi.jpg", name: "Sashimi", details: `Watercolor, 18" x 22"`, price: 125, etsyUrl: "https://www.etsy.com/listing/1692661198/blue-marlin-yellow-fin-tuna?click_key=ef4428d2dd6571446cc3293ace53c1d98a181b87%3A1692661198&click_sum=19184238&ref=shop_home_active_3", slide: true },
  { path: "/paintings/big_fish.jpg", name: "Big Fish Kennebunk", details: `Ink & Watercolor, 12" x 15"`, price: 75, etsyUrl: "https://www.etsy.com/listing/1694047788/the-big-fish-kennebunk-maine?click_key=47f636d7f41bdff1ec2a1740f28dbb3bdbca3303%3A1694047788&click_sum=5aa2b652&ref=shop_home_recs_1&cns=1", slide: true },
  { path: "/paintings/mahi.jpg", name: "Mahi Mahi", details: `Watercolor, 18" x 22"`, price: 150,  etsyUrl: "https://www.etsy.com/listing/1694791224/mahi-mahi?click_key=8000c562c7ddbe90de4f7d6fc772122e2ae5ca6d%3A1694791224&click_sum=cf5dee3f&ref=shop_home_recs_4", slide: true },
  { path: "/paintings/queen_trigger.jpg", name: "Queen Trigger", details: `Watercolor, 12" x 16"`, price: 125,  etsyUrl: "https://www.etsy.com/listing/1708960199/queen-trigger?click_key=776b1feac00265e71b2e13d55a9c0387c611d6e3%3A1708960199&click_sum=3e67461d&ref=shop_home_recs_10" },
  { path: "/paintings/sailfish.jpg", name: "Sailfish", details: `Watercolor, 12" x 20"`, price: 100,  etsyUrl: "https://www.etsy.com/listing/1708216149/sailfish?click_key=e28aea38343343f1c99a3058288f9344a513fcc6%3A1708216149&click_sum=7b31e20f&ref=shop_home_recs_3" },
  { path: "/paintings/scatter.jpg", name: "One, Two, Three, Scatter", details: `Watercolor, 18" x 22"`, price: 150,  etsyUrl: "https://www.etsy.com/listing/1694026190/one-two-three-scatter?click_key=abb8f5fe2be6b30a97fcb9b0519e8e5862046789%3A1694026190&click_sum=87312ea4&ref=shop_home_recs_1&cns=1", slide: true },
  { path: "/paintings/snappers.jpg", name: "Snapper's St. Pete Beach", details: `Ink & Watercolor, 8" x 10"`, price: 75,  etsyUrl: "https://www.etsy.com/listing/1694047788/the-big-fish-kennebunk-maine?click_key=5b33123aba38dd627db8d265eb4cbff233dc1c90%3A1694047788&click_sum=6a92c406&ref=shop_home_recs_4" },
  { path: "/paintings/striper.jpg", name: "Striped Bass", details: `Watercolor, 12" x 20"`, price: 125,  etsyUrl: "https://www.etsy.com/listing/1694042294/striped-bass?click_key=29ac488cfb4a9fed1def8eb317d36ba5324e1610%3A1694042294&click_sum=e978f27b&ref=shop_home_recs_5" },
  { path: "/paintings/tarpon.jpg", name: "Tarpon", details: `Ink & Watercolor, 8" x 10"`, price: 75,  etsyUrl: "https://www.etsy.com/listing/1708971629/tarpon?click_key=3c4d908170eae16f7a70fe4b6c7014129dd9d47c%3A1708971629&click_sum=52058af5&ref=shop_home_recs_11", slide: true },
  { path: "/paintings/yellow_fish.jpg", name: "Yellow Fish", details: `Watercolor, 18" x 22"`, price: 150,  etsyUrl: "https://www.etsy.com/listing/1708958395/yellow-fish?click_key=d659046c390adac4326ca4bd83389d6213f56312%3A1708958395&click_sum=fbfb9d58&ref=shop_home_recs_8", slide: true },
  { path: "/paintings/flounder.jpg", name: "Flounder", details: `Watercolor, 16" x 20"`, price: 100,  etsyUrl: "https://www.etsy.com/listing/1694768768/flounder?click_key=7c4f367de791614f16c92ca8bf9a44834abeee08%3A1694768768&click_sum=ab47d403&ref=shop_home_recs_6&cns=1" },
];

export const baseEtsyUrl = 'https://www.etsy.com/shop/NBPTWatercolors';