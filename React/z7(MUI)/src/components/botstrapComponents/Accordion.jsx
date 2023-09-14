import * as React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: '#000',
  color: 'rgb(231, 233, 234)',
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', transform: 'rotate(90deg)'}} />}
  />
))(({ theme }) => ({
  height: '52px',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  // flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#fff',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    color: 'blue',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0.5),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '11px 16px',
  height: '44px',
}));

export function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{height: '52px'}}>
          <Typography variant="body1">Creator Studio</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analitics
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="body1">Professional Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Add
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="body1">Setting and Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Help Center
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}