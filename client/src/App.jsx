import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.2 }}
      >
        <AppRoutes />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
