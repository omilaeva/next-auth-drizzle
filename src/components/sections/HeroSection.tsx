"use client"

// @flow
import * as React from 'react';
import {Button, Dialog, DialogTrigger, Heading, Modal} from "react-aria-components";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Streamline Your Property Service Calls</h1>
        <p>The complete service call management solution for property managers, landlords, and real estate
          professionals.</p>
        <DialogTrigger>
          <Button className="btn btn-accent">Start Your Free Trial</Button>
          <Modal isDismissable>
            <Dialog>
              <Heading slot="title">Send </Heading>
              <p>Click outside to close this dialog.</p>
            </Dialog>
          </Modal>
        </DialogTrigger>
      </div>
    </section>
  );
};