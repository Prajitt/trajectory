import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  TextField,
  Avatar,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmailIcon from "@mui/icons-material/Email";
import Navbar from "./Navbar";
import backgroundvid from "../assets/vid2.mp4";
import { Link } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Simulation Challenge",
    description:
      "Test your problem-solving skills with complex simulations and scenarios.",
    image:
      "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Case Study",
    description:
      "Dive deep into real-world engineering cases and come up with innovative solutions.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "General",
    description: "Quiz, Debate, Cultural events etc..",
    image:
      "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Fun Activities",
    description:
      "Engage in exciting and interactive activities to unwind and have fun.",
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Hardware Challenge",
    description:
      "Compete in designing innovative hardware solutions to real-world problems.",
    image:
      "https://images.pexels.com/photos/7869047/pexels-photo-7869047.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "AI & Machine Learning Workshop",
    description:
      "Learn and implement the latest AI and machine learning techniques to solve modern problems.",
    image:
      "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "https://via.placeholder.com/150",
    text: "TourPlanner made our trip to India unforgettable!",
  },
  {
    id: 2,
    name: "Priya Singh",
    avatar: "https://via.placeholder.com/150",
    text: "The best way to explore India's hidden gems.",
  },
  {
    id: 3,
    name: "Amit Patel",
    avatar: "https://via.placeholder.com/150",
    text: "I've never had such a seamless travel experience before.",
  },
];

const destinations = [
  {
    id: 1,
    name: "Mechanical Department",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNFES13e38ErdouLsTOOg3bLR9eOeokcMRXVc0c=s1360-w1360-h1020",
  },
  {
    id: 2,
    name: "Playground",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOUccatxSmzPhxPiiGjKlywuohaPcLe_LCNce94=s1360-w1360-h1020",
  },
  {
    id: 3,
    name: "Playground",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPiTbxdJpMtj2MNCUWrZ7h__6jGr2iL4ft9QZeX=s1360-w1360-h1020",
  },
  {
    id: 4,
    name: "Agra",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPiNJJwo8Zm5JsHLqmoyL3PhlPFybcvYTExE_Fv=s1360-w1360-h1020",
  },
];

function HomePage() {
  const [currentDestination, setCurrentDestination] = React.useState(0);

  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestination(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Navbar */}
      <AppBar position="fixed" sx={{ background: "#282a3a" }}>
        <Navbar />
      </AppBar>

      {/* Background Video */}
      <div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column", // Stack videos vertically
    overflow: "hidden",
    zIndex: -1,
  }}
>
  <div
    style={{
      flex: 1,
      width: "100%",
      height: "50%",
    }}
  >
    <video
      autoPlay
      muted
      loop
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <source src={backgroundvid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div
    style={{
      flex: 1,
      width: "100%",
      height: "50%",
    }}
  >
    <video
      autoPlay
      muted
      loop
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <source src={backgroundvid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>


      {/* Main Content */}
      <Box
        sx={{
          mt: 8,
          py: 6,
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontWeight: "bold",
            textShadow: `
                1px 1px 0px #ff8c00, 
                2px 2px 0px #ff4500, 
                3px 3px 0px #ff1493, 
                4px 4px 0px #9400d3, 
                5px 5px 0px #1e90ff, 
                6px 6px 0px #00fa9a
              `,
          }}
        >
          Welcome to mechanical Tech fest
        </Typography>
      </Box>

      {/* Featured Events */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "#ffd700",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Featured Events
        </Typography>

        <Grid container spacing={4}>
          {tours.map((tour) => (
            <Grid item key={tour.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={tour.image}
                  alt={tour.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {tour.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tour.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.8)", color: "white", p: 4 }}>
        <Typography align="center">&copy; {new Date().getFullYear()} Mechanical Tech Fest. All rights reserved.</Typography>
      </Box>
      
      <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.5)", py: 8,color:"white" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
           where You find Us?
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 400,
              overflow: "hidden",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "white",
              }}
              onClick={prevDestination}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "white",
              }}
              onClick={nextDestination}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${currentDestination * 100}%)`,
              }}
            >
              {destinations.map((destination) => (
                <Box
                  key={destination.id}
                  sx={{
                    flexShrink: 0,
                    width: "100%",
                    height: 400,
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      p: 2,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {destination.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 8 ,color:"white"}} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          What Our Organisers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ mr: 2 }}
                  />
                  <Typography variant="subtitle1">
                    {testimonial.name}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  "{testimonial.text}"
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.7)",
          p: 6,
          mt: "auto",
        }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Ready to start your adventure?
        </Typography>
        
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            Subscribe to Social Media
          </Button>
          
        </Box>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
          sx={{ mt: 3 }}
        >
          © {new Date().getFullYear()} Trajectory. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
