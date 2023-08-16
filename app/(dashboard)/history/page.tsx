import HistoryChart from '@/components/HistoryChart'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { get } from 'http'

const getData = async () => {
  const user = await getUserByClerkId()
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  const sum = analyses.reduce((all, curr) => all + curr.sentimentScore, 0)
  const avg = Math.round(sum / analyses.length)
  return { analyses, avg }
}

const History = async () => {
  const { avg, analyses } = await getData()

  return (
    <div className="w-full h-full">
      <div>{`Avg. sentiment: ${avg}`}</div>
      <div className="h-full w-full">
        <HistoryChart data={analyses} />
      </div>
    </div>
  )
}

export default History
