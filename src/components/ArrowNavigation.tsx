import { Link } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ArrowNavigationProps {
    animation: string;
    hidden: string
}

const ArrowNavigation = (props: ArrowNavigationProps) => {
    const { animation, hidden } = props;
  return (
    <div
        className={`fixed bottom-12 right-12
        rounded-full bg-slate-300/50 opacity-60
        shadow-2xl z-20 ${hidden} ${animation}
        hover:opacity-100 hover:bg-slate-300/75
        `}
        >
        <Link href="#header">
            <KeyboardArrowUpIcon
                sx={{ height: '2rem',
                    width: '2rem',
                    color: '#1A1E38',
                margin: '0.5em' }}
            />
        </Link>
    </div>
  )
}

export default ArrowNavigation
