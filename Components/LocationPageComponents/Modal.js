import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
//formspree
import { useForm, ValidationError } from '@formspree/react';

import styles from '../../styles/LocationDisplayPage.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  textAlign: 'center',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [state, handleSubmit] = useForm('xqkjzypy');

  return (
    <div className={styles.modal}>
      <Button onClick={handleOpen}>
        <div className={styles.report}>
          <p>Report any issues with this page</p>
          <img src="/report_flag.png" />
        </div>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2">
              Report an Issue
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form className={styles.report_form} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="messager-name" />
                <ValidationError
                  prefix="Name"
                  field="messager-name"
                  errors={state.errors}
                />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" name="message-subject" />
                <ValidationError
                  prefix="Subject"
                  field="message-subject"
                  errors={state.errors}
                />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  className={styles.button}
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
                <ValidationError errors={state.errors} />
                {state.succeeded && (
                  <h2 className={styles.form_submission}>
                    Thanks for your submission! We&apos;ll review the issue and
                    make any neccessary ammendmnents.
                  </h2>
                )}
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
