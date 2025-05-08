"use client";

import {HeroSection} from "@/components/sections/HeroSection";
import {FeatureSection} from "@/components/sections/FeatureSection";
import {HowItWorksSection} from "@/components/sections/HowItWorksSection";
import {TestimonialSection} from "@/components/sections/TestimonialSection";
import {PricingSection} from "@/components/sections/PricingSection";
import {CtaSection} from "@/components/sections/CtaSection";
import {redirect} from "next/navigation";
import Navbar from "@/components/Navbar";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import axios from "axios";


export default function Home() {
  const {data: session } = useSession();
  const [message, setMessage] = useState("Loading...");

  if (session?.user) {
    redirect("/dashboard");
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('/api/v1/test');
        if (response.status === 200) {
          console.log("Dashboard data:", response.data);
          setMessage(response.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setMessage("Failed to load dashboard data.");
      }
    }
    loadData();
  }, []);

  return (
    <>
      <Header><Navbar/></Header>
      <div>
        <p>{message}</p>
        <HeroSection/>
        <FeatureSection/>
        <HowItWorksSection/>
        <TestimonialSection/>
        <PricingSection/>
        <CtaSection/>
      </div>
      <Footer/>
    </>
  );
}
