import type { Metadata } from "next";
import ReviewArticle, { buildMetadata } from "@/components/ReviewArticle";
import { reviews } from "@/data/reviews";

const d = reviews.kurashi;
const H1 = "くらしのマーケットの雨漏り修理の口コミ・評判は？料金・業者比較を徹底調査";
export const metadata: Metadata = buildMetadata(
  d,
  `${H1}【2026年最新】`,
  "くらしのマーケットの雨漏り修理の口コミ・評判を徹底調査。口コミで業者を比較・予約、出店者と直接取引で費用を抑えやすい、トラブル時の費用補償制度、出店者により対応が異なる点の注意まで編集部が中立的にまとめました。",
);
export default function Page() {
  return <ReviewArticle d={d} h1={H1} />;
}
