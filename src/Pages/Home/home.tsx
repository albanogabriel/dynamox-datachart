import { Helmet } from "react-helmet-async";
import { Footer } from "../../_components/sections/footer";
import { TitlePage } from "../../_components/ui/title-page";
import { Box, Container } from "@mui/material";
import { HeroVideoSection } from "../../_components/sections/herovideo";
import { DynapredictSection } from "../../_components/sections/dynapredict";

export function Home(){
  return (
    <>
      <Helmet title="Home"/>
        <Container sx={{  position: 'relative', display: "flex", flexDirection: 'column', gap: '16px', paddingTop: { xs: '24px', md: '72px' } }}>
          <TitlePage>HomeScreen</TitlePage>

          <Box sx={{ display: "flex", flexDirection: "column", gap: '32px'}} >
            <HeroVideoSection/>
            <DynapredictSection />
          </Box>

        
        </Container>
      <Footer/>
    </>
  )
}