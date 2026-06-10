import type { Metadata } from "next";
import ReviewArticle, { buildMetadata } from "@/components/ReviewArticle";
import { reviews } from "@/data/reviews";

const d = reviews.tatsujin;
const H1 = "雨漏り修理の達人の口コミ・評判は？職人直営・仲介手数料なしを徹底調査";
export const metadata: Metadata = buildMetadata(
  d,
  `${H1}【2026年最新】`,
  "雨漏り修理の達人の口コミ・評判を徹底調査。自社施工の職人直営・仲介手数料なしで適正価格、現地調査・見積もり無料、良心的な費用という声、料金が非公開な点の注意まで編集部が中立的にまとめました。",
);
export default function Page() {
  return <ReviewArticle d={d} h1={H1} />;
}
