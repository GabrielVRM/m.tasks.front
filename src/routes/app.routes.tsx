// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { getSummary } from '../http/get-summary'
// import { useQuery } from '@tanstack/react-query'
// import { Summary } from '../components/summary'
// import { EmptyGoals } from '../components/empty-goals'
// import { CreateGoal } from '../components/create-goals'

// export function AppRoutes() {
//   const { data } = useQuery({
//     queryKey: ['summary'],
//     queryFn: getSummary,
//     staleTime: 1000 * 60, // 60 seconds
//   })
//   return (
//     <>
//       <Routes>
//         {data && data.total > 0 ? (
//           <Route path="summary" element={<Summary />} />
//         ) : (
//           <Route path="emptygoals" element={<EmptyGoals />} />
//         )}
//       </Routes>
//     </>
//   )
// }
