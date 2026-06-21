import { ChartSpline, Pencil, Trash } from "lucide-react"
import { useNavigate } from "react-router"
import Button from "../../../../shared/ui/components/Button"
import useHome from "../../../home/hooks/useHome"
import useAdmin from "../../hook/useAdmin"

const LinkElement = ({ l, deletePermanent = false, onDelete }) => {
  const { handleLinkClick } = useHome()
  const navigate = useNavigate()

  const { handleHardDelete, handleSoftDelete } = useAdmin()

  const handleDelete = async () => {
    if (deletePermanent) {
      await handleHardDelete(l._id)
    } else {
      await handleSoftDelete(l._id)
    }

    onDelete?.(l._id)
  }

  return (
    <div className='flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3'>
      <p
        onClick={() => {
          handleLinkClick({ linkId: l._id })
          window.open(l.url, "_blank")
        }}
        className='cursor-pointer font-medium hover:underline'
      >
        {l.title}
      </p>

      <div className='flex items-center gap-2'>
        <Button
          onClick={() => navigate(`/admin/link/${l._id}/edit`)}
          size='icon'
          variant='ghost'
        >
          <Pencil className='size-4' />
        </Button>

        <Button onClick={handleDelete} size='icon' variant='ghost'>
          <Trash className='size-4' />
        </Button>

        <Button
          onClick={() => navigate(`/admin/${l._id}/analytics`)}
          size='icon'
          variant='ghost'
        >
          <ChartSpline className='size-4' />
        </Button>
      </div>
    </div>
  )
}

export default LinkElement
