export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      routes: {
        index: {
          name: "3x3 Basketball",
          description:
            "Do you remember the first edition of the Knurowski Streetball tournament? We do too and we want to share some good news with you 🥳 On May 25th, we are organizing another installment of our basketball event for YOU.",
          content: {
            header: {
              title: "Registration for the 3x3 tournament is currently closed!",
              description:
                "Visiting this website, you probably already know about Knury and the street basketball tournament organized by them. Soon, more information about Knurowski Streetball will appear on our social media profiles!",
            },
          },
        },
        auth: {
          name: "Verification",
          description: "",
          content: {
            true: {
              name: "",
              description: "",
              content: {
                header: {
                  title: "Thank you!",
                  description: "Your account has been verified, you can now participate in the event",  
                },
                button: "Log in",
                aside: {
                  title: "Not your account?",
                  description: "Register now!",
                },
              },
            },
            false: {
              name: "",
              description: "",
              content: {
                header: {
                  title: "Error occured!",
                  description: "It seems that your verification token is invalid, try again later or contact our support",  
                },
                button: "Sign up again",
                aside: {
                  title: "Still need a support?",
                  description: "Reach us!",
                },
              },
            },
          },
          children: {
            login: {
              name: "Login",
              description: "",
              content: {
                header: {
                  title: "Welcome back",
                  description: "Enter your credentials and enjoy the basketball experience",
                },
                form: {
                  email: "E-mail",
                  password: "Password",
                  submit: "Sign in",
                  forgot: "Forgot your",
                  reset: "password?",
                },
                aside: {
                  title: "Don't have an account?",
                  description: "Create one!",
                },
              },
            },
            register: {
              name: "Register",
              description: "",
              content: {
                header: {
                  title: "Sign up",
                  description: "Register now and secure your spot in our tournament",
                },
                form: {
                  first_name: "First name",
                  last_name: "Last name",
                  email: "E-mail",
                  password: "Password",
                  repeated_password: "Repeated password",
                  submit: "Register",
                },
                aside: {
                  title: "Already have an account?",
                  description: "Log in!",
                },
              },
            },
            reset: {
              name: "Password reset",
              description: "",
              content: {
                header: {
                  title: "Forgot your password?",
                  description: "Braah",
                },
                form: {
                  email: "E-mail",
                  token: "Reset token",
                  submit: "Reset password",
                  forgot: "Password reset token",
                  reset: "not recieved?",
                },
              },
            },
            password: {
              name: "Password reset",
              description: "",
              content: {
                header: {
                  title: "Set your new password",
                  description: "Braah",
                },
                form: {
                  password: "Password",
                  repeated_password: "Repeated Password",
                  submit: "Set a new password",
                  forgot: "Cannot change the",
                  reset: "old password?",
                },
              },
            },
          },
        },
        dashboard: {
          name: "Home",
          description: "",
          content: {
            header: {
              title: "Dashboard",
              description: "Hello!",
            },
          },
          children: {
            teams: {
              name: "Teams",
              description: "",
              content: {},
            },
            live: {
              name: "Live Game",
              description: "",
              content: {},
            },
            standings: {
              name: "Standings",
              description: "",
              content: {},
            },
            schedule: {
              name: "Schedule",
              description: "",
              content: {},
            },
            players: {
              name: "Players",
              description: "",
              content: {},
            },
            leaderboard: {
              name: "Leaderboard",
              description: "",
              content: {
                header: {
                  title: "Leaderboard",
                  description: "Check your performance!",
                },
                sections: {
                  points: "Points",
                  rebounds: "Rebounds",
                  assists: "Assists",
                  steals: "Steals",
                  blocks: "Blocks",
                },
              },
            },
          },
        },
      },
    },
  },
}));
