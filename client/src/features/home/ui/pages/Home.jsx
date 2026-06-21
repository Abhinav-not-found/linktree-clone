import { useEffect, useState } from "react"
import { useParams } from "react-router"
import useHome from "../../hooks/useHome"

const Home = () => {
  const { username } = useParams()
  const { fetchLinks, handleLinkClick } = useHome()
  const [links, setLinks] = useState([])

  useEffect(() => {
    fetchLinks(username)
      .then((l) => {
        if (l?.links) {
          setLinks(l.links)
        }
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [username])

  return (
    <div>
      <p> User:{username}</p>
      <p>Links:</p>
      <div>
        {links.map((l) => {
          console.log(l)
          return (
            <p
              onClick={() => {
                handleLinkClick({ linkId: l._id })
                window.open(l.url, "_blank")
              }}
              key={l.title}
            >
              {l.title}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Home
