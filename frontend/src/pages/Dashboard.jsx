<<<<<<< HEAD
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm.jsx'
import GoalItem from '../components/GoalItem.jsx'
import Spinner from '../components/spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

// type rfce to create function
//import React from 'react'

function Dashboard() {
=======
// type rfce to create function
//import React from 'react'

function Dashboard() {
>>>>>>> parent of c403817 (update frontend functions)
  return (
    <div>Dashboard</div>
  )
}
}
export default Dashboard
