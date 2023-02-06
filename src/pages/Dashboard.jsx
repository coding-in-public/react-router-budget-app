// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";

//  helper functions
import { fetchData } from "../helpers"

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data)
  try {
    throw new Error('Ya done')
  } catch (e) {
    throw new Error("There was a problem creating your account.")
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <>
      {userName ? (<p>{userName}</p>) : <Intro />}
    </>
  )
}
export default Dashboard