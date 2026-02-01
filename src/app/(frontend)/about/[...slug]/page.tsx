import { notFound } from 'next/navigation'

export default function AboutCatchAll() {
  // 捕获所有 /about/* 的路径并触发 404
  notFound()
}
