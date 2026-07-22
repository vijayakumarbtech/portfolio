import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../../data/portfolio';

export function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-base dark:bg-surface-dark-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink dark:bg-white text-white dark:text-ink font-display font-bold text-xl"
          >
            {personal.initials}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
