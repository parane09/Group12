// ===== SPORTS DATA =====
const SPORTS = [
  { id: 'cricket', name: 'Cricket', icon: '🏏', whatsapp: 'https://chat.whatsapp.com/example1', desc: 'The gentleman\'s game. Join the Freshers\' cricket tournament.' },
  { id: 'football', name: 'Football', icon: '⚽', whatsapp: 'https://chat.whatsapp.com/example2', desc: 'Sri Lanka\'s most popular team sport. Show your skills on the field.' },
  { id: 'volleyball', name: 'Volleyball', icon: '🏐', whatsapp: 'https://chat.whatsapp.com/example3', desc: 'Fast-paced court action. Spike your way to victory.' },
  { id: 'badminton', name: 'Badminton', icon: '🏸', whatsapp: 'https://chat.whatsapp.com/example4', desc: 'Precision and speed. Compete in singles and doubles.' },
  { id: 'tabletennis', name: 'Table Tennis', icon: '🏓', whatsapp: 'https://chat.whatsapp.com/example5', desc: 'Lightning reflexes required. Battle it out at the ping pong table.' },
  { id: 'basketball', name: 'Basketball', icon: '🏀', whatsapp: 'https://chat.whatsapp.com/example6', desc: 'Hoop dreams start here. Join the court battle.' },
  { id: 'athletics', name: 'Athletics', icon: '🏃', whatsapp: 'https://chat.whatsapp.com/example7', desc: 'Track and field events. Sprint, jump, and throw your way to gold.' },
  { id: 'swimming', name: 'Swimming', icon: '🏊', whatsapp: 'https://chat.whatsapp.com/example8', desc: 'Make waves in the pool. Multiple stroke categories available.' },
  { id: 'rugby', name: 'Rugby', icon: '🏉', whatsapp: 'https://chat.whatsapp.com/example9', desc: 'Power and teamwork. One of Sri Lanka\'s most beloved sports.' },
  { id: 'netball', name: 'Netball', icon: '🥅', whatsapp: 'https://chat.whatsapp.com/example10', desc: 'A classic Sri Lankan school sport. Fast, strategic, and exciting.' },
  { id: 'chess', name: 'Chess', icon: '♟️', whatsapp: 'https://chat.whatsapp.com/example11', desc: 'The ultimate mind sport. Outsmart your opponent in 64 squares.' },
  { id: 'carom', name: 'Carrom', icon: '🎯', whatsapp: 'https://chat.whatsapp.com/example12', desc: 'A beloved South Asian board sport. Flick your way to the top.' },
  { id: 'tennis', name: 'Tennis', icon: '🎾', whatsapp: 'https://chat.whatsapp.com/example13', desc: 'Serve and volley. Individual and doubles categories.' },
  { id: 'handball', name: 'Handball', icon: '🤾', whatsapp: 'https://chat.whatsapp.com/example14', desc: 'Fast-paced team action on the court.' },
  { id: 'cycling', name: 'Cycling', icon: '🚴', whatsapp: 'https://chat.whatsapp.com/example15', desc: 'Hit the road and race to glory in campus cycling.' },
  { id: 'tug_of_war', name: 'Tug of War', icon: '💪', whatsapp: 'https://chat.whatsapp.com/example16', desc: 'Pure strength and team effort. Don\'t let go!' },
  { id: 'kabaddi', name: 'Kabaddi', icon: '🤼', whatsapp: 'https://chat.whatsapp.com/example17', desc: 'The traditional South Asian contact sport. Raid and defend!' },
  { id: 'shotput', name: 'Shot Put', icon: '🥇', whatsapp: 'https://chat.whatsapp.com/example18', desc: 'Strength meets technique. Throw for the gold.' },
  { id: 'longdistance', name: 'Long Distance Run', icon: '🏅', whatsapp: 'https://chat.whatsapp.com/example19', desc: 'Endurance is key. 5km and 10km categories.' },
  { id: 'esports', name: 'E-Sports', icon: '🎮', whatsapp: 'https://chat.whatsapp.com/example20', desc: 'Digital battles — FIFA & PUBG Mobile tournaments.' },
];

// ===== COACHES DATA =====
const COACHES = [
  { sport: 'Cricket', name: 'Roshan Perera', title: 'Head Coach', bio: 'Former national-level cricketer with 15 years of coaching experience.', contact: 'roshan@ucsc.cmb.ac.lk' },
  { sport: 'Football', name: 'Kasun Silva', title: 'Football Trainer', bio: 'UEFA-certified coach, led multiple university teams to championships.', contact: 'kasun@ucsc.cmb.ac.lk' },
  { sport: 'Volleyball', name: 'Nimali Fernando', title: 'Volleyball Coach', bio: 'Former national women\'s volleyball team member.', contact: 'nimali@ucsc.cmb.ac.lk' },
  { sport: 'Badminton', name: 'Thilanka Jayawardena', title: 'Badminton Coach', bio: 'National junior champion, specialized in footwork and technique.', contact: 'thilanka@ucsc.cmb.ac.lk' },
  { sport: 'Table Tennis', name: 'Pradeep Rathnayake', title: 'TT Coach', bio: 'Inter-university champion with a focus on spin and speed.', contact: 'pradeep@ucsc.cmb.ac.lk' },
  { sport: 'Basketball', name: 'Chamara Wickramasinghe', title: 'Basketball Coach', bio: 'Trained under the Sri Lanka Basketball Federation.', contact: 'chamara@ucsc.cmb.ac.lk' },
  { sport: 'Athletics', name: 'Suneth Dissanayake', title: 'Athletics Trainer', bio: 'Specialized in sprints and field events, national level judge.', contact: 'suneth@ucsc.cmb.ac.lk' },
  { sport: 'Swimming', name: 'Dilhani Bandara', title: 'Swimming Coach', bio: 'Former national swimmer, certified aquatics instructor.', contact: 'dilhani@ucsc.cmb.ac.lk' },
  { sport: 'Rugby', name: 'Asanka Gunaratne', title: 'Rugby Coach', bio: 'Played for the national rugby 7s team for 5 years.', contact: 'asanka@ucsc.cmb.ac.lk' },
  { sport: 'Netball', name: 'Iresha Madushani', title: 'Netball Coach', bio: 'Provincial-level netball coach with 10 years of experience.', contact: 'iresha@ucsc.cmb.ac.lk' },
  { sport: 'Chess', name: 'Vimukthi Samarakoon', title: 'Chess Trainer', bio: 'FIDE-rated player and instructor at national chess academy.', contact: 'vimukthi@ucsc.cmb.ac.lk' },
  { sport: 'Carrom', name: 'Sachith Amarasinghe', title: 'Carrom Trainer', bio: 'National carrom champion 2019, youth development specialist.', contact: 'sachith@ucsc.cmb.ac.lk' },
  { sport: 'Tennis', name: 'Lakshan Rodrigo', title: 'Tennis Coach', bio: 'ITF-certified tennis coach, former Sri Lanka open participant.', contact: 'lakshan@ucsc.cmb.ac.lk' },
  { sport: 'Handball', name: 'Nuwan Herath', title: 'Handball Coach', bio: 'Trained with Asian Handball Federation development program.', contact: 'nuwan@ucsc.cmb.ac.lk' },
  { sport: 'Cycling', name: 'Sampath Kumara', title: 'Cycling Trainer', bio: 'Competitive road cyclist, national ranking top 10.', contact: 'sampath@ucsc.cmb.ac.lk' },
  { sport: 'Tug of War', name: 'Harsha Madawala', title: 'Strength & Conditioning', bio: 'Certified strength coach and team sports specialist.', contact: 'harsha@ucsc.cmb.ac.lk' },
  { sport: 'Kabaddi', name: 'Rajiv Nanayakkara', title: 'Kabaddi Coach', bio: 'National Kabaddi team former captain, now dedicated to youth.', contact: 'rajiv@ucsc.cmb.ac.lk' },
  { sport: 'Shot Put', name: 'Buddika Jayasena', title: 'Field Events Coach', bio: 'National champion in shot put, discus, and hammer throw.', contact: 'buddika@ucsc.cmb.ac.lk' },
  { sport: 'Long Distance Run', name: 'Priyantha Abeysekara', title: 'Endurance Coach', bio: 'Completed multiple international marathons, specialist in long-distance training.', contact: 'priyantha@ucsc.cmb.ac.lk' },
  { sport: 'E-Sports', name: 'Dineth Alwis', title: 'E-Sports Coordinator', bio: 'University e-sports club founder, FIFA & mobile gaming specialist.', contact: 'dineth@ucsc.cmb.ac.lk' },
];

// ===== NEWS DATA =====
const NEWS = [
  { tag: 'ANNOUNCEMENT', title: 'Freshers\' Sports 2025 Registration Now Open!', excerpt: 'All first-year students are invited to register for the annual Freshers\' Sports event. Registration closes on July 31st.', date: 'July 1, 2025' },
  { tag: 'UPDATE', title: 'Cricket Ground Renovation Completed', excerpt: 'The main cricket ground at UCSC has been fully renovated and is ready for the upcoming Freshers\' tournament.', date: 'June 28, 2025' },
  { tag: 'NOTICE', title: 'WhatsApp Groups Now Active for All 20 Sports', excerpt: 'Team coordinators have set up official WhatsApp groups for each sport. Join your sport\'s group from the Sports page.', date: 'June 25, 2025' },
  { tag: 'HIGHLIGHT', title: 'Coach Roshan Perera Joins as Cricket Head Coach', excerpt: 'We are thrilled to welcome former national cricketer Roshan Perera as our Head Cricket Coach for Freshers\' 2025.', date: 'June 20, 2025' },
  { tag: 'REMINDER', title: 'Medical Clearance Required for Contact Sports', excerpt: 'Students registering for Rugby, Kabaddi, and Tug of War must submit a medical clearance form before participating.', date: 'June 18, 2025' },
  { tag: 'EVENT', title: 'Opening Ceremony Scheduled for August 5th', excerpt: 'The grand opening ceremony of Freshers\' Sports 2025 will be held at the UCSC main grounds at 8:30 AM.', date: 'June 15, 2025' },
];

// ===== MATCHES / SCHEDULE =====
const MATCHES = [
  { sport: '🏏 Cricket', teamA: 'UCSC', teamB: 'Faculty of Science', date: 'Aug 6', time: '9:00 AM', venue: 'Main Ground' },
  { sport: '⚽ Football', teamA: 'Faculty of Medicine', teamB: 'Faculty of Arts', date: 'Aug 6', time: '2:00 PM', venue: 'Football Field' },
  { sport: '🏐 Volleyball', teamA: 'Faculty of Management', teamB: 'Faculty of Law', date: 'Aug 7', time: '10:00 AM', venue: 'Indoor Court' },
  { sport: '🏸 Badminton', teamA: 'Faculty of Science', teamB: 'Faculty of Arts', date: 'Aug 7', time: '1:00 PM', venue: 'Sports Hall' },
  { sport: '🏀 Basketball', teamA: 'Faculty of Management', teamB: 'Sri Palee Campus', date: 'Aug 8', time: '3:00 PM', venue: 'Basketball Court' },
  { sport: '♟️ Chess', teamA: 'Faculty of Arts', teamB: 'Faculty of Law', date: 'Aug 8', time: '9:00 AM', venue: 'Seminar Room A' },
  { sport: '🏓 Table Tennis', teamA: 'Faculty of Law', teamB: 'Faculty of Technology', date: 'Aug 9', time: '11:00 AM', venue: 'TT Hall' },
  { sport: '🏉 Rugby', teamA: 'UCSC', teamB: 'Faculty of Science', date: 'Aug 9', time: '4:00 PM', venue: 'Rugby Ground' },
  { sport: '🏊 Swimming', teamA: 'Faculty of Medicine', teamB: 'Faculty of Management', date: 'Aug 10', time: '8:00 AM', venue: 'BMICH Pool' },
  { sport: '🤼 Kabaddi', teamA: 'Faculty of Arts', teamB: 'Faculty of Law', date: 'Aug 10', time: '2:00 PM', venue: 'Indoor Court' },
  { sport: '🎮 E-Sports', teamA: 'UCSC', teamB: 'Faculty of Science', date: 'Aug 11', time: '10:00 AM', venue: 'Computer Lab 3' },
  { sport: '🏃 Athletics', teamA: 'Faculty of Arts', teamB: 'Sri Palee Campus', date: 'Aug 11', time: '7:00 AM', venue: 'Track Field' },
];
