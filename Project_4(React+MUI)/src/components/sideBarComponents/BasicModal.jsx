import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Backdrop, Divider, List, ListItem, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { StyledListItemButton } from './StyledListItemButton';
import { StyledListItemIcon } from './StyledListItemIcon';
import { style } from './style';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { CustomizedAccordions } from './Accordion';

const CBD = styled(Backdrop, { name: 'MuiModal', slot: 'Backdrop', overridesResolver: (props, styles) => { return styles.backdrop; }, })({ zIndex: -10, backgroundColor: 'rgba(0, 0, 0, 0)' })

export function BasicModal(props) {

  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disablePortal
        slots={{ backdrop: CBD }}
        sx={{
          position: 'relative',
        }}
      >
        <Box sx={style}>
          <List>
            {[['Connect', '@'], ['Drafts', <HistoryEduOutlinedIcon />], ['Monetization', <MonetizationOnOutlinedIcon />]].map(([text, icon]) => (
              <ListItem key={text} disablePadding>
                <StyledListItemButton
                  disableRipple
                  onClick={() => console.log(3)}
                >
                  <StyledListItemIcon >
                    {icon}
                  </StyledListItemIcon>
                  <Typography variant="subtitle2">
                    {text}
                  </Typography>
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ bgcolor: '#fff', mx: 2 }} />

          <CustomizedAccordions ></CustomizedAccordions>

        </Box>
      </Modal>
    </div >
  );
}

