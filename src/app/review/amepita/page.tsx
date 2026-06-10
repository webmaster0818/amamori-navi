import type { Metadata } from "next";
import ReviewArticle, { buildMetadata } from "@/components/ReviewArticle";
import { reviews } from "@/data/reviews";

const d = reviews.amepita;
const H1 = "アメピタの口コミ・評判は？雨漏り修理の料金・無料点検を徹底調査";
export const metadata: Metadata = buildMetadata(
  d,
  `${H1}【2026年最新】`,
  "アメピタ(街の屋根やさん)の雨漏り修理の口コミ・評判を徹底調査。創業以来20,000件以上の実績、32,000円からの料金、写真付きの無料点検、必要な工事のみの誠実な対応、利用者のリアルな声まで編集部が中立的にまとめました。",
);
export default function Page() {
  return <ReviewArticle d={d} h1={H1} />;
}
