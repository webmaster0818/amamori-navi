import type { Metadata } from "next";
import ReviewArticle, { buildMetadata } from "@/components/ReviewArticle";
import { reviews } from "@/data/reviews";

const d = reviews.mitsumora;
const H1 = "ミツモアの口コミ・評判は？雨漏り修理の一括見積もりを徹底調査";
export const metadata: Metadata = buildMetadata(
  d,
  `${H1}【2026年最新】`,
  "ミツモアの雨漏り修理の口コミ・評判を徹底調査。最大5社の無料一括見積もり、相場12,000〜48,380円、料金・口コミ・実績の比較のしやすさ、仲介がない点などの注意点、利用者のリアルな声まで編集部が中立的にまとめました。",
);
export default function Page() {
  return <ReviewArticle d={d} h1={H1} />;
}
