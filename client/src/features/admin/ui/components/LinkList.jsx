import { useEffect, useState } from "react"
import { useParams } from "react-router"
import useHome from "../../../home/hooks/useHome"
import LinkElement from "./LinkElement"

const LinkList = () => {
  const { username } = useParams()
  const { fetchLinks } = useHome()
  const [links, setLinks] = useState([])

  useEffect(() => {
    fetchLinks(username)
      .then((l) => {
        if (l?.links) {
          setLinks(l.links)
        }
      })
      .catch(console.log)
  }, [username])

  const removeLink = (linkId) => {
    setLinks((prev) => prev.filter((link) => link._id !== linkId))
  }

  return (
    <div className='mt-2 space-y-2'>
      {links.length === 0 ? (
        <p>No Links found yet, create now.</p>
      ) : (
        links.map((l) => (
          <LinkElement key={l._id} l={l} onDelete={removeLink} />
        ))
      )}
    </div>
  )
}
export default LinkList
