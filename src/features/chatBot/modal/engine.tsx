export const getSmartResponse = (userInput: string): { text: string; showWhatsApp?: boolean } => {
    const input = userInput.toLowerCase().trim();
    
    // Company information object
    const companyInfo = {
        phone: "+256 755 818183",
        email: "sales@lotus.co.ug",
        website: "www.lotus.co.ug",
        address: "Plot 7/9, 2nd Street Industrial Area, Kampala, Uganda",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM"
    };

    // Handle empty or very short inputs
    if (input.length < 2) {
        return {
            text: "I didn't quite catch that. Could you please tell me more about what you're looking for?",
            showWhatsApp: false
        };
    }

    // Greetings and casual conversation
    if (/^(hi|hello|hey|good morning|good afternoon|good evening|greetings|sup|whats up|yo)/.test(input)) {
        return {
            text: `Hello! 😊 Welcome to Lotus Soft Technologies - Uganda's leading business software provider with over 25 years of experience.\n\nI can help you with:\n• Product information (Ritebooks, RiteRoutes, RiteEats, etc.)\n• Service inquiries\n• Demo requests\n• Pricing and quotations\n• Technical support\n• Industry-specific solutions\n\nWhat would you like to know about our business software solutions?`
        };
    }

    // How are you / chatbot status
    if (/how are you|how're you|hows it going|whats up|you good/.test(input)) {
        return {
            text: "I'm doing great, thank you for asking! 😊 I'm here and ready to help you find the perfect business software solution. What can I assist you with today?"
        };
    }

    // Who are you / Bot identity
    if (/who are you|what are you|are you (a )?bot|are you (a )?human|are you real|your name/.test(input)) {
        return {
            text: "I'm Lotus AI Assistant, a smart chatbot designed to help you learn about Lotus Soft Technologies' products and services! 🤖 While I'm not human, I'm here to provide you with accurate information and connect you with our team when needed. How can I help you today?"
        };
    }

    // Jokes / Fun requests
    if (/tell me a joke|make me laugh|funny|joke/.test(input)) {
        const jokes = [
            "😄 Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
            "💼 What's a business owner's favorite type of software?\nThe one that works while they sleep! 😴",
            "📊 Why was the accountant always calm?\nBecause they knew how to balance everything! ⚖️"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        return {
            text: `${randomJoke}\n\nNow, let me help you with something more serious - what would you like to know about our business software solutions?`
        };
    }

    // Weather or off-topic questions
    if (/weather|temperature|rain|sunny|forecast/.test(input)) {
        return {
            text: "I'm a business software assistant, so I don't have weather information! ☀️🌧️ But I can definitely help you with software that makes your business run smoothly regardless of the weather! 😊\n\nWhat business solutions are you interested in?",
            showWhatsApp: true
        };
    }

    // Time-related queries
    if (/what time|current time|time now/.test(input)) {
        return {
            text: `I don't have access to real-time information, but our business hours are:\n\n⏰ ${companyInfo.hours}\n\nFeel free to reach out to our team during these hours!`
        };
    }

    // Sports, entertainment, news
    if (/football|soccer|sports|movie|music|news|game|entertainment/.test(input)) {
        return {
            text: "That's interesting, but I specialize in business software solutions! 😊\n\nHowever, if you run a business in entertainment, sports management, or retail, we have perfect solutions for you! Would you like to know more about our software products?",
            showWhatsApp: true
        };
    }

    // Love, relationships, personal advice
    if (/love|relationship|dating|girlfriend|boyfriend|marriage|personal/.test(input)) {
        return {
            text: "I appreciate you sharing, but I'm focused on helping businesses succeed! 💼\n\nWhile I can't help with personal matters, I can definitely help your business thrive with our software solutions. Want to learn more?",
            showWhatsApp: true
        };
    }

    // About company
    if (/about|who are you|tell me about lotus|company info|your company|history|founder|background/.test(input)) {
        return {
            text: `**Lotus Soft Technologies Ltd.** has been pioneering business software solutions in Uganda for over 25 years! 🚀\n\n👤 **Founded by:** Mr. Nikhil Shah\n👩‍💼 **Co-Director:** Mrs. Shital Shah (expert in Accounting & Finance)\n🏆 **Experience:** 25+ years\n👥 **Clients:** 1000+ across Uganda\n\n🎯 **Our Vision:** To be the most trusted provider of comprehensive business software across Africa\n\n✨ **Core Expertise:**\n• ERP & Accounting Software\n• POS Systems with URA EFRIS Integration\n• Distribution & Route Management\n• Restaurant & Hospitality Management\n• Payroll & HR Systems\n• Custom Software Development\n• IT Infrastructure & Hardware\n\nWould you like to know more about any specific product or service?`
        };
    }

    // Products overview
    if (/products|what do you offer|software|solutions|show me products|your offerings|what do you have|list products/.test(input) && !/payroll|restaurant|route|loyalty|tally|pocket|express|eats|justpay/i.test(input)) {
        return {
            text: `We offer comprehensive business software solutions:\n\n📊 **ERP & Accounting Solutions:**\n• **Ritebooks** - Full ERP Suite for medium to large businesses\n• **Ritebooks Express** - Simplified version for small businesses\n• **Ritebooks Pocket** - Mobile app for micro businesses\n• **Tally Prime** - Professional accounting solution\n\n🚚 **Specialized Business Solutions:**\n• **RiteRoutes** - Field Sales & Distribution Management\n• **RiteEats** - Restaurant & Hospitality Management\n• **Rite Payroll** - Complete HR & Payroll System\n• **JustPay** - Multi-Vendor Loyalty Platform\n\n💡 **All solutions offer:**\n• URA EFRIS Compliance\n• Cloud & On-Premise Options\n• Multi-branch Support\n• Regular Updates & Support\n\nWhich solution interests you most?`
        };
    }

    // Ritebooks
    if (/(ritebooks(?! express| pocket)|erp|accounting software|inventory management|what is ritebooks|main product)/.test(input) && !/express|pocket/.test(input)) {
        return {
            text: `**Ritebooks** is our flagship ERP solution! 🎯\n\n✅ **Comprehensive Features:**\n• Complete Accounting (Trial Balance, P&L, Balance Sheet)\n• Advanced Inventory & Stock Management with Batch/Serial Control\n• Multi-Branch & Multi-Currency Support\n• POS with Built-in URA EFRIS Integration\n• Manufacturing & Assembly Modules\n• Route Sales & Distribution Management\n• Bank Reconciliation & Cash Flow Reports\n• User Role Permissions & Audit Trails\n\n🏢 **Perfect for:** Retail Chains, Wholesale Distributors, Manufacturing, Service Companies\n\n💡 **Deployment:** Available in both Cloud and On-Premise versions\n\n📞 **Next Step:** Would you like to request a demo or get specific pricing information?`,
            showWhatsApp: true
        };
    }

    // Ritebooks Express
    if (/ritebooks express|express|small business|startup|affordable|basic version|simplified/.test(input)) {
        return {
            text: `**Ritebooks Express** is perfect for startups and small businesses! 💼\n\n✅ **Key Features:**\n• Basic Accounting (Sales, Purchases, Receipts, Payments)\n• Inventory Control with Reorder Alerts\n• POS Billing with Barcode Scanning\n• Essential Reports for Profit & Stock Monitoring\n• Multi-User Access\n• Cloud Hosting Option Available\n\n🏪 **Ideal for:** Small Retailers, Shops, Pharmacies, Service Businesses\n\n💰 **Affordable pricing** with easy setup!\n\nWould you like a personalized demo or pricing quote?`,
            showWhatsApp: true
        };
    }

    // Ritebooks Pocket
    if (/ritebooks pocket|pocket|mobile app|android|smartphone|field|on the go/.test(input)) {
        return {
            text: `**Ritebooks Pocket** puts your business in your pocket! 📱\n\n✅ **Mobile Features:**\n• Sales & Purchase Entry\n• Daily Summary Dashboard\n• POS Billing & Receipt Printing\n• Offline Functionality with Cloud Sync\n• Customer & Supplier Tracking\n• Optional URA EFRIS Integration\n\n📱 **Platform:** Android Mobile & Tablet Application\n\n🎯 **Perfect for:** Micro Businesses, Field Traders, Mobile Vendors, Small Shops\n\n💡 **Benefit:** Manage your business from anywhere, even without internet!\n\nInterested in trying the mobile app?`
        };
    }

    // RiteRoutes
    if (/riteroutes|route|distribution|field sales|van sales|fmcg|sales rep|delivery/.test(input)) {
        return {
            text: `**RiteRoutes** - Complete Field Sales & Distribution Management! 🚚\n\n✅ **Key Features:**\n• Route Planning & Sales Rep Assignment\n• GPS Tracking & Real-Time Monitoring\n• Order Booking & Delivery Confirmation\n• Inventory and Van Stock Management\n• Payment Collection Tracking\n• Performance Dashboards & Analytics Reports\n\n📲 **Platform:** Web Dashboard + Mobile App (Android)\n\n🏭 **Perfect for:** FMCG Distributors, Beverage Companies, Pharmaceuticals, Wholesalers\n\n💡 **Results:** Increase sales efficiency by 40% with real-time tracking!\n\nShall I arrange a demo for your sales team?`,
            showWhatsApp: true
        };
    }

    // Rite Payroll
    if (/payroll|rite payroll|hr|salary|paye|nssf|lst|employee|staff/.test(input)) {
        return {
            text: `**Rite Payroll** - Automated Payroll Management! 💰\n\n✅ **Compliance & Features:**\n• Automated Payroll Calculations\n• PAYE, NSSF & LST Compliance\n• Employee Self-Service (ESS) Portal\n• Loan & Advance Management\n• Multi-Branch Payroll Processing\n• Cloud Backup & Report Generation\n\n☁️ **Deployment:** Available in Cloud & On-Premise\n\n🏢 **Used by:** Corporates, NGOs, Manufacturing, Retail Chains, Schools\n\n⚡ **Benefit:** Reduce payroll processing time by 80%!\n\nWant to see how it simplifies your HR processes?`
        };
    }

    // RiteEats
    if (/riteeats|restaurant|bar|hotel|cafe|food|kitchen|dining|takeaway|delivery/.test(input)) {
        return {
            text: `**RiteEats** - Complete Restaurant Management! 🍽️\n\n✅ **Comprehensive Features:**\n• Table, Takeaway & Delivery Management\n• Kitchen Display System (KDS)\n• Recipe & Cost Control\n• Queue & Reservation Management\n• Inventory & Waste Tracking\n• Online Ordering Integration\n• Event & Buffet Management\n• Waiter/Captain Mobile App\n• URA EFRIS Integrated Billing\n\n🍴 **Perfect for:** Restaurants, Bars, Cafés, Hotels, Event Venues, Catering\n\n💡 **Benefit:** Improve table turnover by 30% and reduce food waste!\n\nReady to transform your restaurant operations?`,
            showWhatsApp: true
        };
    }

    // JustPay
    if (/justpay|loyalty|customer retention|rewards|membership|wallet|points/.test(input)) {
        return {
            text: `**JustPay** - Multi-Vendor Loyalty Platform! 🎁\n\n✅ **Customer Engagement Features:**\n• Digital Membership Creation\n• Loyalty Savings Wallet (Non-Point Based)\n• Multi-Outlet Redemption System\n• Real-Time Offers & Notifications\n• Seamless Integration with POS & Ritebooks\n• Customer Insights & Analytics Dashboard\n\n📱 **Platform:** Mobile App + Cloud Dashboard\n\n🛍️ **Perfect for:** Supermarkets, Retail Chains, Salons, Pharmacies, Restaurants\n\n💡 **Result:** Increase customer repeat business by 45%!\n\nInterested in boosting customer retention?`
        };
    }

    // Tally Prime
    if (/tally|tally prime|accountant|auditor|vat/.test(input)) {
        return {
            text: `We're **Uganda's Leading Tally Prime Partner**! 📊\n\n✅ **Services & Features:**\n• Full Accounting & Financial Management\n• VAT & URA EFRIS Compliance\n• Multi-Currency & Cost Centre Reporting\n• Advanced Inventory & Reconciliation\n• Custom Tally Module Development\n• Remote Access via Tally Cloud\n• Training & Ongoing Support\n\n💻 **Deployment:** Desktop & Cloud Options Available\n\n👨‍💼 **Perfect for:** Accountants, Auditors, SMEs, Enterprises, Financial Services\n\n🔧 **Expertise:** 25+ years of Tally implementation experience!\n\nNeed Tally customization, support, or cloud access?`
        };
    }

    // Services overview
    if (/services|custom|development|integration|cloud|website|hosting|what services/.test(input) && !/product/.test(input)) {
        return {
            text: `**Our Professional Services:**\n\n💻 **Software Development:**\n• Custom ERP & CRM Systems\n• Mobile App Development (Android/iOS)\n• URA EFRIS Integration & Setup\n• Tally Customization & Cloud Services\n\n☁️ **Cloud & Infrastructure:**\n• Secure Cloud Hosting & Data Backup\n• IT Infrastructure Setup & Maintenance\n• Hardware Solutions (HP/DELL Servers, SOPHOS Firewalls)\n• Annual Maintenance Contracts (AMCs)\n\n🌐 **Digital Solutions:**\n• Website Development & SEO-optimized Hosting\n• E-Commerce Integrations (Shopify/WooCommerce)\n• Digital Transformation Consulting\n\nWhich service are you most interested in? I can provide detailed information!`
        };
    }

    // EFRIS specific
    if (/efris|ura|tax|fiscalization|invoice|compliance|tax authority/.test(input)) {
        return {
            text: `**URA EFRIS Integration** - Stay Compliant Effortlessly! 📋\n\nWe provide comprehensive EFRIS services:\n\n✅ **Complete Setup:**\n• EFRIS Device Configuration\n• System Integration with your POS/ERP\n• Invoice Automation & Synchronization\n• Staff Training & Ongoing Support\n\n💡 **All our POS systems come with built-in EFRIS integration!**\n\n⚡ **Quick Implementation:** Typically 1-2 days for complete setup\n\n🛡️ **Benefit:** Avoid penalties with seamless tax compliance!\n\nNeed help with EFRIS setup or having compliance issues?`,
            showWhatsApp: true
        };
    }

    // Hardware solutions
    if (/hardware|server|firewall|pos system|laptop|infrastructure|computer|printer|equipment/.test(input)) {
        return {
            text: `**IT Infrastructure & Hardware Solutions:**\n\n🖥️ **We Provide Enterprise-grade Hardware:**\n• HP & DELL Servers\n• SOPHOS Firewalls & Security\n• Complete POS Systems & Receipt Printers\n• Laptops, Computers & Workstations\n• Antivirus & Security Solutions\n• Network Cabling & Structured Wiring\n\n🔧 **Professional Services:**\n• Server Configuration & Optimization\n• Firewall Setup & Security\n• Network Infrastructure Design\n• Annual Maintenance Contracts (AMCs)\n• 24/7 Technical Support Options\n\n💼 **Trusted by:** 1000+ businesses across Uganda\n\nNeed a hardware quote or infrastructure assessment?`,
            showWhatsApp: true
        };
    }

    // Custom development
    if (/custom software|custom development|bespoke|tailor made|unique requirement/.test(input)) {
        return {
            text: `**Custom Software Development** - Built Exactly for Your Needs! 🛠️\n\nWe specialize in:\n\n✅ **Custom Solutions:**\n• Tailor-made ERP & CRM Systems\n• Business Process Automation\n• Workflow Management Systems\n• Integration with Existing Systems\n\n📱 **Mobile Development:**\n• Android & iOS Applications\n• Cross-platform Mobile Solutions\n• Enterprise Mobile Apps\n\n💡 **Our Approach:**\n1. Requirements Analysis\n2. Prototype & Design\n3. Development & Testing\n4. Deployment & Training\n5. Ongoing Support\n\nHave specific business processes that need automation?`,
            showWhatsApp: true
        };
    }

    // Cloud services
    if (/cloud|hosting|backup|remote access|online/.test(input)) {
        return {
            text: `**Cloud Hosting & Backup Solutions** - Access Your Data Anywhere! ☁️\n\n✅ **Our Cloud Services:**\n• Secure Cloud Hosting for all our software\n• Automated Daily Data Backup\n• Disaster Recovery Solutions\n• Remote Access from Any Device\n• 99.9% Uptime Guarantee\n• Bank-grade Security & Encryption\n\n💡 **Benefits:**\n• No server maintenance costs\n• Access your business data 24/7\n• Automatic updates & security patches\n• Scalable as your business grows\n\nInterested in moving to the cloud?`
        };
    }

    // Website development
    if (/website|web development|seo|online presence|digital marketing/.test(input)) {
        return {
            text: `**Website Development & Digital Presence** 🌐\n\nWe create powerful online presence:\n\n✅ **Our Web Services:**\n• Responsive, SEO-optimized Websites\n• E-Commerce Stores (Shopify/WooCommerce)\n• Website Hosting & Maintenance\n• Search Engine Optimization (SEO)\n• Google Business Profile Setup\n• Social Media Integration\n\n💡 **Special Offer:** Website development with integrated booking system for our software demos!\n\nReady to establish your digital presence?`
        };
    }

    // Demo request
    if (/demo|demonstration|show me|trial|test|see how it works/.test(input)) {
        return {
            text: `Excellent choice! I'd love to arrange a personalized demo for you! 🎯\n\nTo schedule your demonstration:\n\n📞 **Call us directly:** ${companyInfo.phone}\n📧 **Email:** ${companyInfo.email}\n💬 **WhatsApp:** Click below to start chatting\n\n**For better service, please mention:**\n1. Which product(s) interest you\n2. Your industry and business type\n3. Number of users/branches\n4. Your preferred demo time\n\nOur team typically responds within 2 hours during business hours and will provide a customized demo!`,
            showWhatsApp: true
        };
    }

    // Pricing inquiries
    if (/price|pricing|cost|how much|quote|quotation|expensive|cheap|budget/.test(input)) {
        return {
            text: `I'd be happy to help with pricing information! 💰\n\nOur pricing is customized based on:\n• Specific product/solution required\n• Number of users and branches\n• Deployment type (Cloud vs On-Premise)\n• Customization requirements\n• Support and maintenance needs\n\n📋 **For accurate pricing:**\n📞 Call: ${companyInfo.phone}\n📧 Email: ${companyInfo.email}\n\n💡 **Quick Response:** Our sales team will send you a detailed quotation within 24 hours!\n\nWhich product are you most interested in for pricing?`,
            showWhatsApp: true
        };
    }

    // Contact information
    if (/contact|reach|call|phone|email|address|location|where are you|visit|meet/.test(input)) {
        return {
            text: `**Contact Lotus Soft Technologies:**\n\n📍 **Address:** ${companyInfo.address}\n\n📞 **Phone:** ${companyInfo.phone}\n📧 **Email:** ${companyInfo.email}\n🌐 **Website:** ${companyInfo.website}\n\n⏰ **Business Hours:**\n${companyInfo.hours}\n\n🚗 **Parking:** Available onsite\n📅 **Appointments:** Recommended for personalized service\n\nWould you like to schedule a visit or call with our experts?`,
            showWhatsApp: true
        };
    }

    // Industry-specific recommendations
    if (/retail|shop|store|supermarket|pharmacy|shopkeeper/.test(input)) {
        return {
            text: `Perfect! For **Retail businesses**, we recommend:\n\n🏪 **Ritebooks/Ritebooks Express** - Complete POS & Inventory Management\n🎁 **JustPay** - Customer Loyalty & Retention Program\n\n🛒 **Key Retail Features:**\n• Fast POS billing with barcode scanning\n• Inventory management with reorder alerts\n• URA EFRIS compliance built-in\n• Customer loyalty programs\n• Multi-branch synchronization\n• Supplier and purchase management\n\n📊 **Results:** Typical 30% reduction in stockouts and 25% increase in sales!\n\nShall I arrange a retail-specific demo?`
        };
    }

    if (/distribution|distributor|wholesale|supplier|fmcg|beverage/.test(input)) {
        return {
            text: `Excellent! For **Distribution businesses**, we offer:\n\n🚚 **RiteRoutes** - Field Sales & Distribution Management\n📊 **Ritebooks** - Complete ERP with Route Sales Integration\n\n📦 **Distribution Features:**\n• Route planning & optimization\n• GPS tracking & real-time monitoring\n• Van stock management\n• Mobile order booking\n• Payment collection tracking\n• Sales performance analytics\n\n💡 **Benefits:** Increase sales efficiency by 40% and reduce delivery errors!\n\nWant to see how it works for distributors?`
        };
    }

    if (/manufacturing|factory|production|assembly|plant/.test(input)) {
        return {
            text: `For **Manufacturing businesses**, our solution is:\n\n🏭 **Ritebooks ERP with Manufacturing Modules**\n\n⚙️ **Manufacturing Features:**\n• Bill of Materials (BOM) Management\n• Production Planning & Scheduling\n• Assembly Line Management\n• Raw Material & Finished Goods Tracking\n• Quality Control & Inspection\n• Cost Analysis & Profitability\n\n📈 **Results:** Typical 25% reduction in production costs and 35% faster order fulfillment!\n\nInterested in a manufacturing-specific demo?`
        };
    }

    if (/restaurant|hotel|hospitality|cafe|bar|food service/.test(input)) {
        return {
            text: `For **Hospitality businesses**, we recommend:\n\n🍽️ **RiteEats** - Complete Restaurant & Hospitality Management\n\n🎯 **Hospitality Features:**\n• Table management & floor planning\n• Kitchen display system (KDS)\n• Online ordering integration\n• Inventory & recipe cost control\n• Staff management & performance\n• Customer feedback system\n\n⭐ **Benefits:** Improve table turnover by 30% and reduce food waste by 25%!\n\nReady to see RiteEats in action?`
        };
    }

    // Support and technical help
    if (/support|help|issue|problem|not working|error|bug|technical|fix/.test(input)) {
        return {
            text: `I'm here to help! 🛟\n\nFor **Technical Support & Assistance:**\n\n📞 **Phone Support:** ${companyInfo.phone} (Immediate help during business hours)\n📧 **Email Support:** ${companyInfo.email} (Response within 4 hours)\n💬 **WhatsApp Support:** Click below for quick help\n\n⏰ **Support Hours:**\n${companyInfo.hours}\n\n🔧 **We Provide:**\n• Remote troubleshooting\n• On-site support (when needed)\n• Training and retraining\n• System updates and maintenance\n\nPlease describe your issue and I'll make sure you get priority support!`,
            showWhatsApp: true
        };
    }

    // Business hours
    if (/hours|open|close|weekend|saturday|sunday|when are you open/.test(input)) {
        return {
            text: `**Our Business Hours:**\n\n🕘 **Monday - Friday:** 9:00 AM - 6:00 PM\n🕘 **Saturday:** 9:00 AM - 1:00 PM\n🚫 **Sunday:** Closed\n\n📍 **Location:** ${companyInfo.address}\n\n💡 **After-hours Support:** Available for emergency issues for AMC clients\n\nNeed to schedule a visit outside these hours? Contact us to arrange an appointment!`
        };
    }

    // Implementation and setup
    if (/implementation|setup|install|installation|how long|timeline|process/.test(input)) {
        return {
            text: `**Implementation Process** - Smooth & Efficient! 🚀\n\n📋 **Our Typical Implementation:**\n1. **Consultation** (1-2 days) - Understand your needs\n2. **System Setup** (2-5 days) - Configure for your business\n3. **Data Migration** (1-3 days) - Transfer existing data\n4. **Training** (2-4 days) - Train your team\n5. **Go-Live Support** (1 week) - Ensure smooth transition\n6. **Ongoing Support** - Continuous improvement\n\n⏱️ **Total Time:** Typically 1-3 weeks depending on complexity\n\n💡 **We Handle:** All technical aspects while you focus on your business!\n\nInterested in discussing implementation for your business?`
        };
    }

    // Training inquiries
    if (/training|learn|teach|how to use|user guide|manual/.test(input)) {
        return {
            text: `**Comprehensive Training Program** 📚\n\nWe provide complete training for all our solutions:\n\n✅ **Training Includes:**\n• Initial system training for all users\n• Administrator training for IT staff\n• Advanced feature workshops\n• Regular refresher courses\n• Customized training for specific roles\n\n👨‍🏫 **Training Methods:**\n• On-site at your location\n• Remote online sessions\n• Video tutorials & documentation\n• Hands-on practical exercises\n\n💡 **Result:** Your team becomes confident and efficient with the software!\n\nNeed specific training for your team?`
        };
    }

    // Recommendation requests
    if (/recommend|suggest|which|what should|best for|advice|not sure|what do i need/.test(input)) {
        return {
            text: `I'd love to recommend the perfect solution for your business! 🎯\n\nTo provide the best recommendation, please tell me:\n\n1. **Your Industry:** (retail, manufacturing, restaurant, etc.)\n2. **Business Size:** (startup, small, medium, large enterprise)\n3. **Main Challenges:** (accounting, inventory, sales, payroll, etc.)\n4. **Number of Users/Branches:**\n5. **Current Systems:** (if any)\n\nBased on your answers, I can suggest the ideal solution from our product range!\n\nWhat's your business type and main needs?`
        };
    }

    // Thanks and appreciation
    if (/thank|thanks|appreciate|grateful|helpful/.test(input)) {
        return {
            text: `You're very welcome! 😊\n\nI'm glad I could help you learn about Lotus Soft Technologies.\n\nIs there anything else you'd like to know about our products or services?\n\nRemember, we're always here to help:\n📞 ${companyInfo.phone}\n📧 ${companyInfo.email}\n🌐 ${companyInfo.website}\n\nWe look forward to helping your business grow and succeed! 🚀`
        };
    }

    // Goodbye and farewell
    if (/bye|goodbye|see you|farewell|good night|gotta go|take care|later/.test(input)) {
        return {
            text: `Thank you for chatting with Lotus Soft Technologies! 👋\n\nWe appreciate your interest in our solutions. Feel free to reach out anytime:\n\n📞 ${companyInfo.phone}\n📧 ${companyInfo.email}\n🌐 ${companyInfo.website}\n\nHave a wonderful day and we look forward to serving your business needs! 🚀`
        };
    }

    // Partnership and reseller inquiries
    if (/partner|reseller|affiliate|collaboration|work together|b2b/.test(input)) {
        return {
            text: `**Partnership Opportunities** - Let's Grow Together! 🤝\n\nWe welcome partnerships with:\n• IT Companies & Consultants\n• Accounting Firms\n• Business Consultants\n• Technology Resellers\n• System Integrators\n\n✅ **Partnership Benefits:**\n• Competitive commission structure\n• Technical training & certification\n• Marketing support & materials\n• Joint business development\n• Priority technical support\n\nInterested in becoming a Lotus partner? Contact our partnership team!`,
            showWhatsApp: true
        };
    }

    // Career inquiries
    if (/job|career|employment|vacancy|hire|work for you|recruitment/.test(input)) {
        return {
            text: `**Career Opportunities** - Join Our Growing Team! 💼\n\nWhile I don't have current job openings information, we're always interested in talented professionals.\n\n🎯 **We Typically Hire:**\n• Software Developers\n• Sales Executives\n• Technical Support Engineers\n• Implementation Consultants\n• Project Managers\n\n📧 **To Inquire:** Please send your CV to ${companyInfo.email} with subject "Career Inquiry"\n\nWe'll contact you when suitable positions become available!`
        };
    }

    // Profanity or inappropriate content
    if (/\b(stupid|dumb|idiot|fool|hate|suck|bad|terrible|worst)\b/.test(input)) {
        return {
            text: "I understand you might be frustrated, but I'm here to help in a professional manner. 😊 Let's focus on finding the right business software solution for you. What can I assist you with today?"
        };
    }

    // Complex questions requiring human intervention
    if (input.includes('?') && input.length > 15) {
        return {
            text: `That's an excellent and detailed question! 🤔\n\nFor the most accurate and comprehensive answer, I recommend:\n\n📞 **Speaking with our experts:** ${companyInfo.phone}\n📧 **Emailing our team:** ${companyInfo.email}\n💬 **WhatsApp consultation:** Click below for immediate help\n\nOur specialists have 25+ years of experience and can provide detailed answers to complex questions.\n\nIn the meantime, you can ask me about:\n• Product features & benefits\n• Industry-specific solutions\n• Demo scheduling\n• Basic pricing information\n• Company background\n\nHow else can I assist you?`,
            showWhatsApp: true
        };
    }

    // Completely off-topic or unclear queries
    if (input.length > 8 && !/software|business|system|lotus|rite|product|service|demo|price|accounting|inventory|pos|erp|payroll|restaurant|distribution/i.test(input)) {
        return {
            text: `I appreciate your message! While I specialize in business software solutions, I'd love to help you with:\n\n💼 **Our Expertise:**\n• Business software & ERP systems\n• POS and inventory management\n• Restaurant and hospitality solutions\n• Distribution and route sales\n• Payroll and HR management\n• Custom software development\n• IT infrastructure and hardware\n\nFor other inquiries, feel free to contact our team directly via WhatsApp below.\n\nWhat business software solution are you interested in?`,
            showWhatsApp: true
        };
    }

    // Default intelligent response for business-related queries
    return {
        text: `I understand you're interested in business software solutions! 🎯\n\nI can help you with:\n• Product information & detailed features\n• Industry-specific recommendations\n• Demo scheduling & personalized tours\n• Pricing inquiries & quotations\n• Technical questions & support\n• Implementation process & timeline\n• Contact information & business hours\n\nWhat specific information would you like? Or would you prefer to connect directly with our experts for personalized assistance?`,
        showWhatsApp: true
    };
};