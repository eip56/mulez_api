import Button from '../Button/Button'
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Buttons() {
  return (
    <div className="grid w-fit grid-cols-4 gap-4">
      <div className="grid grid-cols-1 gap-2">
        <Button variant="text" size="sm">
          Small
        </Button>
        <Button variant="outlined" size="sm">
          Small
        </Button>
        <Button variant="contained" size="sm">
          Small
        </Button>
        <Button variant="outlined" size="sm" startIcon={<DeleteIcon fontSize="inherit" />}>
          Small
        </Button>
        <Button variant="outlined" size="sm" endIcon={<SendIcon fontSize="inherit" />}>
          Small
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <Button variant="text" size="md">
          Medium
        </Button>
        <Button variant="outlined">Medium</Button>
        <Button variant="outlined">Medium</Button>
        <Button variant="outlined" startIcon={<DeleteIcon fontSize="inherit" />}>
          Medium
        </Button>
        <Button variant="outlined" endIcon={<SendIcon fontSize="inherit" />}>
          Medium
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <Button variant="text" size="lg">
          Large
        </Button>
        <Button variant="outlined" size="lg">
          Large
        </Button>
        <Button variant="contained" size="lg">
          Large
        </Button>
        <Button variant="outlined" size="lg" startIcon={<DeleteIcon fontSize="inherit" />}>
          Large
        </Button>
        <Button variant="outlined" size="lg" endIcon={<SendIcon fontSize="inherit" />}>
          Large
        </Button>
      </div>
    </div>
  )
}
