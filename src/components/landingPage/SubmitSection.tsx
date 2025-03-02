
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SubmitSection = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate('/submit-complaint');
  };

  return (
    <section id="submit" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Submit Your Complaint?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our streamlined process makes it easy to report issues and get the response you deserve. Start your submission now and track its progress in real-time.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              onClick={handleSubmitClick}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 h-auto"
            >
              Submit a Complaint <Send className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/faq')}
              className="border-primary text-primary hover:bg-primary/10 font-medium px-8 py-6 h-auto"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            <p>Your privacy matters. All submissions are secured with end-to-end encryption.</p>
            <p className="mt-2">Average response time: 2-3 business days</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubmitSection;
