import { Box } from '@mui/material';
import type { TimelineRowProps } from '../types/types';
import '../styles/components/TimelineRow.scss';

export default function TimelineRow({ isLast, children }: TimelineRowProps) {
  return (
    <Box className="timeline-row-container">
        <Box className="dot-plus-vertical-connector">
            <Box className="timeline-dot"/>
            {/* Connector line — hidden for last item */}
            {!isLast && (
                <Box className="timeline-connector"/>
            )}
        </Box>
        <Box className="timeline-content" sx={{ pb: isLast ? 0 : 5 }}>
            {children}
        </Box>
    </Box>
  );
}