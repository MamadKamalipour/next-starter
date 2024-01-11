"use client"
import { movies } from "@/mock/movies"
import {
   Add,
   ArrowDropDown,
   Bookmark,
   BookmarkBorder,
   Drafts,
   Edit,
   ExpandLess,
   ExpandMore,
   Face,
   Favorite,
   FavoriteBorder,
   FileCopy,
   Folder,
   FormatBold,
   FormatColorFill,
   FormatItalic,
   FormatUnderlined,
   Inbox,
   LocationOn,
   Mail,
   Navigation,
   Print,
   Remove,
   Restore,
   Save,
   Share,
   StarBorder,
   VolumeDown,
   VolumeUp,
} from "@mui/icons-material"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import AlarmIcon from "@mui/icons-material/Alarm"
import DeleteIcon from "@mui/icons-material/Delete"
import MenuIcon from "@mui/icons-material/Menu"
import SendIcon from "@mui/icons-material/Send"
import {
   Accordion,
   AccordionActions,
   AccordionDetails,
   AccordionSummary,
   Alert,
   AppBar,
   Autocomplete,
   Avatar,
   Badge,
   BottomNavigation,
   BottomNavigationAction,
   Box,
   Breadcrumbs,
   Button,
   ButtonGroup,
   Checkbox,
   Chip,
   CircularProgress,
   Collapse,
   Container,
   CssBaseline,
   Divider,
   Drawer,
   Fab,
   FormControl,
   FormControlLabel,
   FormLabel,
   IconButton,
   InputLabel,
   LinearProgress,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   ListSubheader,
   MenuItem,
   Pagination,
   Radio,
   RadioGroup,
   Rating,
   Select,
   Skeleton,
   Slider,
   SpeedDial,
   SpeedDialAction,
   SpeedDialIcon,
   Stack,
   Step,
   StepButton,
   Stepper,
   Switch,
   Tab,
   Tabs,
   TextField,
   ToggleButton,
   ToggleButtonGroup,
   Toolbar,
   Tooltip,
   Typography,
} from "@mui/material"
import { pink } from "@mui/material/colors"
import Link from "next/link"
import { Fragment, SyntheticEvent, useEffect, useRef, useState } from "react"

const Page = () => {
   const [formats, setFormats] = useState(() => ["bold", "italic"])

   const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats)
   }
   const [count, setCount] = useState(1)
   const [invisible, setInvisible] = useState(false)

   const handleBadgeVisibility = () => {
      setInvisible(!invisible)
   }
   const [open, setOpen] = useState(true)

   const handleClick = () => {
      setOpen(!open)
   }
   const [progress, setProgress] = useState(0)
   const [buffer, setBuffer] = useState(10)

   const progressRef = useRef(() => {})

   useEffect(() => {
      const timer = setInterval(() => {
         progressRef.current()
      }, 500)

      return () => {
         clearInterval(timer)
      }
   }, [])

   const drawerWidth = 240
   const navItems = ["Home", "About", "Contact"]
   const [mobileOpen, setMobileOpen] = useState(false)

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState)
   }
   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
         <Typography variant="h6" sx={{ my: 2 }}>
            MUI
         </Typography>
         <Divider />
         <List>
            {navItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                     <ListItemText primary={item} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   )
   const [value, setValue] = useState("recents")

   const handleChange = (event: SyntheticEvent, newValue: string) => {
      setValue(newValue)
   }
   const actions = [
      { icon: <FileCopy />, name: "Copy" },
      { icon: <Save />, name: "Save" },
      { icon: <Print />, name: "Print" },
      { icon: <Share />, name: "Share" },
   ]
   //   Stepper
   const steps = ["Select campaign settings", "Create an ad group", "Create an ad"]

   const [activeStep, setActiveStep] = useState(0)
   const [completed, setCompleted] = useState<{
      [k: number]: boolean
   }>({})

   const totalSteps = () => {
      return steps.length
   }

   const completedSteps = () => {
      return Object.keys(completed).length
   }

   const isLastStep = () => {
      return activeStep === totalSteps() - 1
   }

   const allStepsCompleted = () => {
      return completedSteps() === totalSteps()
   }

   const handleNext = () => {
      const newActiveStep =
         isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
              // find the first step that has been completed
              steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1
      setActiveStep(newActiveStep)
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
   }

   const handleStep = (step: number) => () => {
      setActiveStep(step)
   }

   const handleComplete = () => {
      const newCompleted = completed
      newCompleted[activeStep] = true
      setCompleted(newCompleted)
      handleNext()
   }

   const handleReset = () => {
      setActiveStep(0)
      setCompleted({})
   }
   //   Tabs
   const [tab, setTab] = useState(0)

   const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
      setTab(+newValue)
   }
   function CustomTabPanel(props: any) {
      const { children, value, index, ...other } = props

      return (
         <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
               <Box sx={{ p: 3 }}>
                  <Typography>{children}</Typography>
               </Box>
            )}
         </div>
      )
   }

   function a11yProps(index: number) {
      return {
         id: `simple-tab-${index}`,
         "aria-controls": `simple-tabpanel-${index}`,
      }
   }

   return (
      <Box position="relative">
         <Container>
            <Stack useFlexGap spacing={3} sx={{ padding: "2rem", mt: "5rem" }}>
               <Stack spacing={2}>
                  <Typography variant="h1" gutterBottom>
                     h1. Heading
                  </Typography>
                  <Typography variant="h2" gutterBottom>
                     h2. Heading
                  </Typography>
                  <Typography variant="h3" gutterBottom>
                     h3. Heading
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                     h4. Heading
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                     h5. Heading
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                     h6. Heading
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                     subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                     subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                     body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                     inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                     body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                     inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                  </Typography>
                  <Typography variant="button" display="block" gutterBottom>
                     button text
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                     caption text
                  </Typography>
                  <Typography variant="overline" display="block" gutterBottom>
                     overline text
                  </Typography>
               </Stack>

               <Stack spacing={2}>
                  <Typography fontWeight={700} fontSize={"16px"}>
                     Inputs
                  </Typography>
                  <Box>
                     <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={movies}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                     />
                     <Box
                        component="form"
                        sx={{
                           "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                     >
                        <div>
                           <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
                           <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
                           <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                           <TextField
                              id="outlined-read-only-input"
                              label="Read Only"
                              defaultValue="Hello World"
                              InputProps={{
                                 readOnly: true,
                              }}
                           />
                           <TextField
                              id="outlined-number"
                              label="Number"
                              type="number"
                              InputLabelProps={{
                                 shrink: true,
                              }}
                           />
                           <TextField id="outlined-search" label="Search field" type="search" />
                           <TextField id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" />
                        </div>
                        <div>
                           <TextField required id="filled-required" label="Required" defaultValue="Hello World" variant="filled" />
                           <TextField disabled id="filled-disabled" label="Disabled" defaultValue="Hello World" variant="filled" />
                           <TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled" />
                           <TextField
                              id="filled-read-only-input"
                              label="Read Only"
                              defaultValue="Hello World"
                              InputProps={{
                                 readOnly: true,
                              }}
                              variant="filled"
                           />
                           <TextField
                              id="filled-number"
                              label="Number"
                              type="number"
                              InputLabelProps={{
                                 shrink: true,
                              }}
                              variant="filled"
                           />
                           <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                           <TextField
                              id="filled-helperText"
                              label="Helper text"
                              defaultValue="Default Value"
                              helperText="Some important text"
                              variant="filled"
                           />
                        </div>
                        <div>
                           <TextField required id="standard-required" label="Required" defaultValue="Hello World" variant="standard" />
                           <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" variant="standard" />
                           <TextField
                              id="standard-password-input"
                              label="Password"
                              type="password"
                              autoComplete="current-password"
                              variant="standard"
                           />
                           <TextField
                              id="standard-read-only-input"
                              label="Read Only"
                              defaultValue="Hello World"
                              InputProps={{
                                 readOnly: true,
                              }}
                              variant="standard"
                           />
                           <TextField
                              id="standard-number"
                              label="Number"
                              type="number"
                              InputLabelProps={{
                                 shrink: true,
                              }}
                              variant="standard"
                           />
                           <TextField id="standard-search" label="Search field" type="search" variant="standard" />
                           <TextField
                              id="standard-helperText"
                              label="Helper text"
                              defaultValue="Default Value"
                              helperText="Some important text"
                              variant="standard"
                           />
                        </div>
                     </Box>
                  </Box>
               </Stack>

               <Stack>
                  <CssBaseline />
                  <AppBar component="nav">
                     <Toolbar>
                        <IconButton
                           color="inherit"
                           aria-label="open drawer"
                           edge="start"
                           onClick={handleDrawerToggle}
                           sx={{ mr: 2, display: { sm: "none" } }}
                        >
                           <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                           MUI
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                           {navItems.map((item) => (
                              <Button key={item} sx={{ color: "#fff" }}>
                                 {item}
                              </Button>
                           ))}
                        </Box>
                     </Toolbar>
                  </AppBar>
                  <nav>
                     <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        anchor="right"
                        onClose={handleDrawerToggle}
                        ModalProps={{
                           keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                           display: { xs: "block", sm: "none" },
                           "& .MuiDrawer-paper": {
                              boxSizing: "border-box",
                              width: drawerWidth,
                           },
                        }}
                     >
                        {drawer}
                     </Drawer>
                  </nav>
               </Stack>

               <Stack>
                  <Typography fontWeight={700} fontSize={"16px"}>
                     Checkboxs
                  </Typography>
                  <div>
                     <Checkbox defaultChecked size="small" />
                     <Checkbox defaultChecked />
                     <Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
                     <Checkbox defaultChecked />
                     <Checkbox defaultChecked color="secondary" />
                     <Checkbox defaultChecked color="success" />
                     <Checkbox defaultChecked color="default" />
                     <Checkbox
                        defaultChecked
                        sx={{
                           color: pink[800],
                           "&.Mui-checked": {
                              color: pink[600],
                           },
                        }}
                     />
                     <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                     <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
                  </div>
               </Stack>

               <Stack spacing={2}>
                  <CircularProgress />
                  <CircularProgress color="secondary" />
                  <CircularProgress color="success" />
                  <CircularProgress color="inherit" />
                  <LinearProgress />
                  <LinearProgress color="secondary" />
                  <LinearProgress color="success" />
                  <LinearProgress color="inherit" />
                  <LinearProgress variant="determinate" value={progress} />
                  <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
               </Stack>

               <Stack>
                  <Breadcrumbs aria-label="breadcrumb">
                     <Link color="inherit" href="/">
                        MUI
                     </Link>
                     <Link color="inherit" href="/material-ui/getting-started/installation/">
                        Core
                     </Link>
                     <Typography color="text.primary">Breadcrumbs</Typography>
                  </Breadcrumbs>
               </Stack>

               <Stack>
                  <Stepper nonLinear activeStep={activeStep}>
                     {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                           <StepButton color="inherit" onClick={handleStep(index)}>
                              {label}
                           </StepButton>
                        </Step>
                     ))}
                  </Stepper>
                  <div>
                     {allStepsCompleted() ? (
                        <Fragment>
                           <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                              <Box sx={{ flex: "1 1 auto" }} />
                              <Button onClick={handleReset}>Reset</Button>
                           </Box>
                        </Fragment>
                     ) : (
                        <Fragment>
                           <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Step {activeStep + 1}</Typography>
                           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                 Back
                              </Button>
                              <Box sx={{ flex: "1 1 auto" }} />
                              <Button onClick={handleNext} sx={{ mr: 1 }}>
                                 Next
                              </Button>
                              {activeStep !== steps.length &&
                                 (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: "inline-block" }}>
                                       Step {activeStep + 1} already completed
                                    </Typography>
                                 ) : (
                                    <Button onClick={handleComplete}>{completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}</Button>
                                 ))}
                           </Box>
                        </Fragment>
                     )}
                  </div>
               </Stack>

               <Stack spacing={3}>
                  <Pagination count={10} shape="rounded" />
                  <Pagination count={10} variant="outlined" shape="rounded" />
                  <Pagination count={10} variant="outlined" />
                  <Pagination count={10} variant="outlined" color="primary" />
                  <Pagination count={10} variant="outlined" color="secondary" />
                  <Pagination count={10} variant="outlined" disabled />
                  <Pagination count={10} />
                  <Pagination count={10} color="primary" />
                  <Pagination count={10} color="secondary" />
                  <Pagination count={10} disabled />
                  <Pagination count={11} defaultPage={6} siblingCount={0} />
                  <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
                  <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
                  <Pagination count={11} defaultPage={6} boundaryCount={2} />
               </Stack>

               <Stack>
                  <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                     <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
                     <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
                     <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
                     <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
                  </BottomNavigation>
               </Stack>

               <Stack spacing={1}>
                  {/* For variant="text", adjust the height via font-size */}
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

                  {/* For other variants, adjust the size with `width` and `height` */}
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
               </Stack>

               <Stack spacing={2} direction={"row"}>
                  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
                  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
               </Stack>

               <Stack>
                  <Tooltip title="Add" placement="top-start">
                     <Button>top-start</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="top">
                     <Button>top</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="top-end">
                     <Button>top-end</Button>
                  </Tooltip>

                  <Tooltip title="Add" placement="left-start">
                     <Button>left-start</Button>
                  </Tooltip>
                  <br />
                  <Tooltip title="Add" placement="left">
                     <Button>left</Button>
                  </Tooltip>
                  <br />
                  <Tooltip title="Add" placement="left-end">
                     <Button>left-end</Button>
                  </Tooltip>

                  <Tooltip title="Add" placement="right-start">
                     <Button>right-start</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="right">
                     <Button>right</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="right-end">
                     <Button>right-end</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom-start">
                     <Button>bottom-start</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom">
                     <Button>bottom</Button>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom-end">
                     <Button>bottom-end</Button>
                  </Tooltip>
                  <Tooltip title="Delete">
                     <IconButton>
                        <DeleteIcon />
                     </IconButton>
                  </Tooltip>
               </Stack>

               <Stack>
                  <Accordion>
                     <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                        Accordion 1
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                     </AccordionDetails>
                  </Accordion>
                  <Accordion>
                     <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2-content" id="panel2-header">
                        Accordion 2
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                     </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded>
                     <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel3-content" id="panel3-header">
                        Accordion Actions
                     </AccordionSummary>
                     <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                     </AccordionDetails>
                     <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                     </AccordionActions>
                  </Accordion>
               </Stack>

               <Stack spacing={2} direction={"row"}>
                  <Chip label="Chip Filled" />
                  <Chip label="Chip Outlined" variant="outlined" />
                  <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
                  <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable />
                  <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable />
                  <Chip avatar={<Avatar alt="Natacha" src="https://mui.com/static/images/avatar/1.jpg" />} label="Avatar" variant="outlined" />
                  <Chip icon={<Face />} label="With Icon" variant="outlined" />
               </Stack>

               <Stack>
                  <nav aria-label="main mailbox folders">
                     <List>
                        <ListItem disablePadding>
                           <ListItemButton>
                              <ListItemIcon>
                                 <Inbox />
                              </ListItemIcon>
                              <ListItemText primary="Inbox" />
                           </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                           <ListItemButton>
                              <ListItemIcon>
                                 <Drafts />
                              </ListItemIcon>
                              <ListItemText primary="Drafts" />
                           </ListItemButton>
                        </ListItem>
                     </List>
                  </nav>
                  <Divider />
                  <nav aria-label="secondary mailbox folders">
                     <List>
                        <ListItem disablePadding>
                           <ListItemButton>
                              <ListItemText primary="Trash" />
                           </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                           <ListItemButton component="a" href="#simple-list">
                              <ListItemText primary="Spam" />
                           </ListItemButton>
                        </ListItem>
                     </List>
                  </nav>
                  <List
                     sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                     component="nav"
                     aria-labelledby="nested-list-subheader"
                     subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                           Nested List Items
                        </ListSubheader>
                     }
                  >
                     <ListItemButton>
                        <ListItemIcon>
                           <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                     </ListItemButton>
                     <ListItemButton>
                        <ListItemIcon>
                           <Drafts />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                     </ListItemButton>
                     <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                           <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                     </ListItemButton>
                     <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>
                                 <StarBorder />
                              </ListItemIcon>
                              <ListItemText primary="Starred" />
                           </ListItemButton>
                        </List>
                     </Collapse>
                  </List>
               </Stack>

               <Stack spacing={2} direction={"row"}>
                  <Badge badgeContent={4} color="primary">
                     <Mail color="action" />
                  </Badge>
                  <Box
                     sx={{
                        color: "action.active",
                        display: "flex",
                        flexDirection: "column",
                        "& > *": {
                           marginBottom: 2,
                        },
                        "& .MuiBadge-root": {
                           marginRight: 4,
                        },
                     }}
                  >
                     <div>
                        <Badge color="secondary" badgeContent={count}>
                           <Mail />
                        </Badge>
                        <ButtonGroup>
                           <Button
                              aria-label="reduce"
                              onClick={() => {
                                 setCount(Math.max(count - 1, 0))
                              }}
                           >
                              <Remove fontSize="small" />
                           </Button>
                           <Button
                              aria-label="increase"
                              onClick={() => {
                                 setCount(count + 1)
                              }}
                           >
                              <Add fontSize="small" />
                           </Button>
                        </ButtonGroup>
                     </div>
                     <div>
                        <Badge color="secondary" variant="dot" invisible={invisible}>
                           <Mail />
                        </Badge>
                        <FormControlLabel
                           sx={{ color: "text.primary" }}
                           control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                           label="Show Badge"
                        />
                     </div>
                  </Box>
               </Stack>

               <Stack>
                  <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormat}>
                     <ToggleButton value="bold" aria-label="bold">
                        <FormatBold />
                     </ToggleButton>
                     <ToggleButton value="italic" aria-label="italic">
                        <FormatItalic />
                     </ToggleButton>
                     <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlined />
                     </ToggleButton>
                     <ToggleButton value="color" aria-label="color" disabled>
                        <FormatColorFill />
                        <ArrowDropDown />
                     </ToggleButton>
                  </ToggleButtonGroup>
               </Stack>

               <Stack>
                  <Switch defaultChecked />
                  <Switch />
                  <Switch disabled defaultChecked />
                  <Switch disabled />
               </Stack>

               <Stack spacing={2} direction="row">
                  <VolumeUp />
                  <Slider aria-label="Volume" value={10} />
                  <VolumeDown />
               </Stack>

               <Stack spacing={2}>
                  <FormControl>
                     <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                     <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                     </RadioGroup>
                  </FormControl>
                  <FormControl>
                     <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                     <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
                     </RadioGroup>
                  </FormControl>
               </Stack>

               <Stack>
                  <Box>
                     <Typography component="legend">Controlled</Typography>
                     <Rating name="simple-controlled" value={1} />
                     <Typography component="legend">Read only</Typography>
                     <Rating name="read-only" value={2} readOnly />
                     <Typography component="legend">Disabled</Typography>
                     <Rating name="disabled" value={3} disabled />
                     <Typography component="legend">No rating given</Typography>
                     <Rating name="no-value" value={null} />
                  </Box>
               </Stack>

               <Stack spacing={2}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                     <InputLabel id="demo-select-small-label">Age</InputLabel>
                     <Select labelId="demo-select-small-label" id="demo-select-small" label="Age">
                        <MenuItem value="">
                           <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                     </Select>
                  </FormControl>
               </Stack>

               <Stack spacing={2}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                     <Tabs value={tab} onChange={handleChangeTab} aria-label="basic tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                     </Tabs>
                  </Box>
                  <CustomTabPanel value={tab} index={0}>
                     Item One
                  </CustomTabPanel>
                  <CustomTabPanel value={tab} index={1}>
                     Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={tab} index={2}>
                     Item Three
                  </CustomTabPanel>
               </Stack>

               <Stack spacing={2}>
                  <Typography fontWeight={700} fontSize={"16px"}>
                     Floating Action Buttons
                  </Typography>
                  <Stack direction={"row"} component={"div"} spacing={2}>
                     <Fab color="primary" aria-label="add">
                        <Add />
                     </Fab>
                     <Fab color="secondary" aria-label="edit">
                        <Edit />
                     </Fab>
                     <Fab variant="extended">
                        <Navigation sx={{ mr: 1 }} />
                        Navigate
                     </Fab>
                     <Fab disabled aria-label="like">
                        <Favorite />
                     </Fab>
                     <Fab size="small" color="secondary" aria-label="add">
                        <Add />
                     </Fab>
                     <Fab size="medium" color="secondary" aria-label="add">
                        <Add />
                     </Fab>
                     <Fab color="secondary" aria-label="add">
                        <Add />
                     </Fab>
                  </Stack>
               </Stack>

               <Stack spacing={2}>
                  <Typography fontWeight={700} fontSize={"16px"}>
                     Buttons
                  </Typography>
                  <Stack spacing={2}>
                     <Stack spacing={2} direction="row">
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                     </Stack>
                     <Stack spacing={2} direction="row">
                        <Button>Primary</Button>
                        <Button disabled>Disabled</Button>
                        <Button href="#text-buttons">Link</Button>
                     </Stack>
                     <Stack spacing={2} direction="row">
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained" disabled>
                           Disabled
                        </Button>
                        <Button variant="contained" href="#contained-buttons">
                           Link
                        </Button>
                     </Stack>

                     <Stack spacing={2} direction="row">
                        <Button variant="outlined">Primary</Button>
                        <Button variant="outlined" disabled>
                           Disabled
                        </Button>
                        <Button variant="outlined" href="#outlined-buttons">
                           Link
                        </Button>
                     </Stack>

                     <Stack direction={"row"} spacing={2}>
                        <Button size="small">Small</Button>
                        <Button size="medium">Medium</Button>
                        <Button size="large">Large</Button>
                     </Stack>
                     <Stack direction={"row"} spacing={2}>
                        <Button variant="outlined" size="small">
                           Small
                        </Button>
                        <Button variant="outlined" size="medium">
                           Medium
                        </Button>
                        <Button variant="outlined" size="large">
                           Large
                        </Button>
                     </Stack>
                     <Stack direction={"row"} spacing={2}>
                        <Button variant="contained" size="small">
                           Small
                        </Button>
                        <Button variant="contained" size="medium">
                           Medium
                        </Button>
                        <Button variant="contained" size="large">
                           Large
                        </Button>
                     </Stack>

                     <Stack direction={"row"} spacing={2}>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                           Delete
                        </Button>
                        <Button variant="contained" endIcon={<SendIcon />}>
                           Send
                        </Button>
                     </Stack>

                     <Stack direction={"row"} spacing={2}>
                        <IconButton aria-label="delete">
                           <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                           <DeleteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                           <AlarmIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                           <AddShoppingCartIcon />
                        </IconButton>
                     </Stack>
                  </Stack>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                     <Button fullWidth>One</Button>
                     <Button fullWidth>Two</Button>
                     <Button fullWidth>Three</Button>
                  </ButtonGroup>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                     <Button fullWidth variant="outlined">
                        One
                     </Button>
                     <Button fullWidth variant="outlined">
                        Two
                     </Button>
                     <Button fullWidth variant="outlined">
                        Three
                     </Button>
                  </ButtonGroup>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                     <Button fullWidth variant="text">
                        One
                     </Button>
                     <Button fullWidth variant="text">
                        Two
                     </Button>
                     <Button fullWidth variant="text">
                        Three
                     </Button>
                  </ButtonGroup>
                  <ButtonGroup size="small" aria-label="small button group">
                     <Button>One</Button>
                     <Button>Two</Button>
                     <Button>Three</Button>
                  </ButtonGroup>
                  <ButtonGroup color="secondary" aria-label="medium secondary button group">
                     <Button>One</Button>
                     <Button>Two</Button>
                     <Button>Three</Button>
                  </ButtonGroup>
                  <ButtonGroup size="large" aria-label="large button group">
                     <Button>One</Button>
                     <Button>Two</Button>
                     <Button>Three</Button>
                  </ButtonGroup>
               </Stack>

               <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="success">This is a success Alert.</Alert>
                  <Alert severity="info">This is an info Alert.</Alert>
                  <Alert severity="warning">This is a warning Alert.</Alert>
                  <Alert severity="error">This is an error Alert.</Alert>
                  <Alert variant="filled" severity="success">
                     This is a filled success Alert.
                  </Alert>
                  <Alert variant="filled" severity="info">
                     This is a filled info Alert.
                  </Alert>
                  <Alert variant="filled" severity="warning">
                     This is a filled warning Alert.
                  </Alert>
                  <Alert variant="filled" severity="error">
                     This is a filled error Alert.
                  </Alert>
                  <Alert variant="outlined" severity="success">
                     This is an outlined success Alert.
                  </Alert>
                  <Alert variant="outlined" severity="info">
                     This is an outlined info Alert.
                  </Alert>
                  <Alert variant="outlined" severity="warning">
                     This is an outlined warning Alert.
                  </Alert>
                  <Alert variant="outlined" severity="error">
                     This is an outlined error Alert.
                  </Alert>
               </Stack>
            </Stack>
         </Container>
         <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: "fixed", bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
            {actions.map((action) => (
               <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
            ))}
         </SpeedDial>
      </Box>
   )
}

export default Page
