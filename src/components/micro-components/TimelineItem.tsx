import { Box, Link } from '@mui/material'
import useObserver from '../../hooks/useObserver'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
export interface Timeline {
	key: string
	year: string
	title: string
	duration: string
	details: string[],
  logoUrl: string,
  logoLink: string,
  isMobile: boolean
}

const TimelineItem = (timeline: Timeline) => {
	const { year, title, duration, details, logoUrl, logoLink, isMobile } =
    timeline;

	const obsRefContainer = useObserver({ isMobile });
	const obsRef = useObserver({ isMobile });
	return (
    <Box
      ref={obsRefContainer}
      className="flex flex-col md:flex-row
				border-l border-slate-300 relative pb-8"
    >
      <Box className="mb-4 ml-4">
        <div
          className="absolute w-3 h-3 bg-slate-300
					rounded-full mt-2 -left-1.5 border-white"
        />

        <Box ref={obsRef}>
          <Box
            className="flex flex-wrap gap-4
					items-center justify-start
					text-xs md:text-sm"
          >
            <span
              className="px-2 py-1 font-semibold
							text-white bg-stone-900 rounded-md"
            >
              {year}
            </span>
            <h3
              className="text-base md:text-lg font-semibold text-stone-900
							drop-shadow-4xl"
            >
              {title}
            </h3>
            <Link href={logoLink}
              className={`transition duration-300 ease-in-out
                transform hover:scale-110 hover:-translate-y-1
                ${year === '2020' ? 'w-4' : ''}`} // aim at 42logo size
            >
              <img
                src={logoUrl}
                alt="logo_company"
                className={`max-w-fit max-h-6
                  ${year === '2020' ? 'w-4' : 'w-16'}`} // aim at 42logo size
              />
            </Link>
            <div
              className="text-xs md:text-sm font-normal leading-none
							text-stone-400"
            >
              {duration}
            </div>
          </Box>
          <div
            className="my-2 text-sm md:text-base font-normal
					text-stone-700 "
          >
            {details.map((detail) => (
              <p
                key={detail}
                className="flex justify-start items-start mb-1
                  pb-2 background-gradient-expand"
              >
                <TaskAltIcon
                  sx={{
                    height: "1.5rem",
                    width: "1.5rem",
                    color: "#1A1E38",
                    marginRight: "0.5rem",
                    opacity: "0.9",
                  }}
                />
                {detail}
              </p>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default TimelineItem