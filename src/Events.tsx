import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flag,
  Heart,
  Leaf,
  MapPin,
  Music,
  PlayCircle,
  Plus,
  Search,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import "./Events.css";

type EventItem = {
  id: number;
  category: string;
  title: string;
  date: string;
  dateLabel: string;
  time: string;
  location: string;
  image: string;
  color: string;
};

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    category: "PRAVACHAN",
    title: "Acharya Shri Vidyasagar Ji Maharaj Pravachan",
    date: "2026-05-25",
    dateLabel: "25 May 2026",
    time: "6:00 PM",
    location: "Shree Digambar Jain Mandir, Mumbai",
    image: "/images/Pravachan.jpg",
    color: "#7c4dff",
  },
  {
    id: 2,
    category: "YATRA",
    title: "Shikharji Mahatirth Group Yatra",
    date: "2026-06-10",
    dateLabel: "10 Jun 2026 - 20 Jun 2026",
    time: "Morning",
    location: "Sammed Shikharji, Jharkhand",
    image: "/images/pilgrimage group.png",
    color: "#f6a623",
  },
  {
    id: 3,
    category: "JPL",
    title: "Jain Premier League Season 3",
    date: "2026-07-15",
    dateLabel: "15 Jul 2026 - 30 Jul 2026",
    time: "Multiple Cities",
    location: "Multiple Cities",
    image: "/images/cricket.jpg",
    color: "#12a86b",
  },
  {
    id: 4,
    category: "MUSIC FESTIVAL",
    title: "Jain Music Festival - Devotional Night",
    date: "2026-08-05",
    dateLabel: "05 Aug 2026",
    time: "7:00 PM",
    location: "Jio World Convention Centre, Mumbai",
    image: "/images/dance.jpg",
    color: "#ef3d72",
  },
];

const timelineEvents = [
  {
    title: "Pravachan Series",
    description: "Enlightening sessions by revered Acharyas and Sants.",
    status: "Ongoing",
    icon: <BookOpen size={17} />,
    type: "ongoing",
  },
  {
    title: "Chaturmas",
    description: "Spiritual growth, daily pravachan and community seva.",
    status: "Jul - Oct 2026",
    icon: <Sparkles size={17} />,
    type: "orange",
  },
  {
    title: "Mahaparva Celebrations",
    description: "Paryushan, Mahavir Jayanti and other sacred festivals.",
    status: "Aug - Sep 2026",
    icon: <Heart size={17} />,
    type: "pink",
  },
  {
    title: "Yatra Season",
    description: "Pilgrimages to sacred tirths and historical places.",
    status: "Oct - Mar 2027",
    icon: <MapPin size={17} />,
    type: "blue",
  },
  {
    title: "Community Festivals",
    description: "Cultural programs, unity events and celebrations.",
    status: "Year Round",
    icon: <Users size={17} />,
    type: "green",
  },
];

const calendarEvents: Record<string, string[]> = {
  "2026-05-25": ["Acharya Shri Vidyasagar Ji Pravachan"],
  "2026-06-10": ["Shikharji Mahatirth Group Yatra"],
  "2026-06-15": ["Shikharji Mahatirth Group Yatra"],
  "2026-07-15": ["Jain Premier League Season 3"],
  "2026-07-25": ["Jain Premier League Season 3"],
  "2026-08-05": ["Jain Music Festival - Devotional Night"],
  "2026-08-15": ["Mahaparva Celebration"],
  "2026-09-05": ["Paryushan Mahaparva"],
  "2026-09-12": ["Paryushan Mahaparva"],
  "2026-10-02": ["Community Festival"],
  "2026-10-15": ["Yatra Season"],
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();

  const days: {
    day: number;
    currentMonth: boolean;
    date: string;
  }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    const day = previousMonthDays - i;
    const previousMonth = month === 0 ? 11 : month - 1;
    const previousYear = month === 0 ? year - 1 : year;

    days.push({
      day,
      currentMonth: false,
      date: `${previousYear}-${String(previousMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`,
    });
  }

  for (let day = 1; day <= totalDays; day++) {
    days.push({
      day,
      currentMonth: true,
      date: `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`,
    });
  }

  const remaining = 42 - days.length;

  for (let day = 1; day <= remaining; day++) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    days.push({
      day,
      currentMonth: false,
      date: `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`,
    });
  }

  return days;
}

function formatSelectedDate(date: string) {
  const selected = new Date(`${date}T00:00:00`);

  return selected.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Event() {
  const [calendarDate, setCalendarDate] = useState(new Date(2026, 4, 1));
  const [selectedDate, setSelectedDate] = useState("2026-05-25");

  const calendarDays = useMemo(
    () => getCalendarDays(calendarDate.getFullYear(), calendarDate.getMonth()),
    [calendarDate]
  );

  const selectedEvents = calendarEvents[selectedDate] || [];

  const previousMonth = () => {
    setCalendarDate((current) => {
      const next = new Date(current);
      next.setMonth(next.getMonth() - 1);
      return next;
    });
  };

  const nextMonth = () => {
    setCalendarDate((current) => {
      const next = new Date(current);
      next.setMonth(next.getMonth() + 1);
      return next;
    });
  };

  const goToToday = () => {
    setCalendarDate(new Date(2026, 4, 1));
    setSelectedDate("2026-05-25");
  };

  return (
    <main className="events-page">
      {/* HERO */}
      <section className="events-hero">
        <div className="events-hero-content">
          <div className="events-label">EVENTS & EXPERIENCES</div>

          <h1>
            Experience the
            <br />
            Spirit of <span>Togetherness.</span>
          </h1>

          <p>
            Discover events that inspire, uplift and unite
            <br />
            the global Jain community.
          </p>

          <div className="hero-actions">
            <button className="primary-button">
              Explore Events <ArrowRight size={17} />
            </button>

            <button className="secondary-button">
              <CalendarDays size={16} />
              Create Event
            </button>
          </div>

          <div className="trusted-community">
            <div className="avatar-stack">
              <img src="/images/F1.jpg" alt="Community member" />
              <img src="/images/F2.jpg" alt="Community member" />
              <img src="/images/F3.jpg" alt="Community member" />
              <img src="/images/F4.jpg" alt="Community member" />
              <img src="/images/F5.jpg" alt="Community member" />
            </div>

            <div>
              <strong>Trusted by thousands of</strong>
              <span>Jain families worldwide</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/images/T2.jpg"
            alt="Jain temple and community"
            className="hero-temple-image"
          />

          <div className="hero-logo-watermark"></div>
        </div>
      </section>

      {/* EVENT CATEGORIES */}
      <section className="event-categories">
        <div className="category-item">
          <div className="category-icon purple">
            <PlayCircle size={21} />
          </div>
          <span>Pravachan</span>
        </div>

        <div className="category-item">
          <div className="category-icon orange">
            <Flag size={21} />
          </div>
          <span>Yatra</span>
        </div>

        <div className="category-item">
          <div className="category-icon green">
            <Leaf size={21} />
          </div>
          <span>JPL</span>
        </div>

        <div className="category-item">
          <div className="category-icon pink">
            <Music size={21} />
          </div>
          <span>Music Festival</span>
        </div>

        <div className="category-item">
          <div className="category-icon gold">
            <Sparkles size={21} />
          </div>
          <span>Mahaparva</span>
        </div>

        <div className="category-item">
          <div className="category-icon blue">
            <MapPin size={21} />
          </div>
          <span>Temple Events</span>
        </div>

        <div className="category-item">
          <div className="category-icon violet">
            <BookOpen size={21} />
          </div>
          <span>Pathshala</span>
        </div>

        <div className="category-item">
          <div className="category-icon light-green">
            <Heart size={21} />
          </div>
          <span>Volunteer Drives</span>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="upcoming-section">
        <div className="section-heading">
          <div>
            <h2>Upcoming Events</h2>
          </div>

          <button className="view-events-button">
            View all events <ArrowRight size={15} />
          </button>
        </div>

        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-card-image">
                <img src={event.image} alt={event.title} />

                <span
                  className="event-category-badge"
                  style={{ backgroundColor: event.color }}
                >
                  {event.category}
                </span>
              </div>

              <div className="event-card-content">
                <h3>{event.title}</h3>

                <div className="event-meta">
                  <div>
                    <CalendarDays size={13} />
                    <span>{event.dateLabel}</span>
                  </div>

                  <div>
                    <Clock3 size={13} />
                    <span>{event.time}</span>
                  </div>

                  <div>
                    <MapPin size={13} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="event-card-buttons">
                  <button className="details-button">Details</button>
                  <button className="book-button">
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EVENT INFORMATION AREA */}
      <section className="event-information">
        {/* EVENT TIMELINE */}
        <div className="timeline-panel">
          <div className="panel-title">
            <h2>Event Timeline</h2>
          </div>

          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div className="timeline-item" key={event.title}>
                <div className={`timeline-icon ${event.type}`}>
                  {event.icon}
                </div>

                {index !== timelineEvents.length - 1 && (
                  <div className="timeline-line" />
                )}

                <div className="timeline-content">
                  <div className="timeline-top">
                    <h3>{event.title}</h3>
                    <span className={`timeline-status ${event.type}`}>
                      {event.status}
                    </span>
                  </div>

                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CALENDAR */}
        <div className="calendar-panel">
          <div className="calendar-header">
            <h2>
              {monthNames[calendarDate.getMonth()]}{" "}
              {calendarDate.getFullYear()}
            </h2>

            <div className="calendar-controls">
              <button onClick={previousMonth} aria-label="Previous month">
                <ChevronLeft size={16} />
              </button>

              <button onClick={nextMonth} aria-label="Next month">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="calendar-weekdays">
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {calendarDays.map((dayInfo, index) => {
              const hasEvent = Boolean(calendarEvents[dayInfo.date]);
              const isSelected = selectedDate === dayInfo.date;

              return (
                <button
                  key={`${dayInfo.date}-${index}`}
                  className={[
                    "calendar-day",
                    !dayInfo.currentMonth ? "outside-month" : "",
                    isSelected ? "selected-day" : "",
                    hasEvent ? "has-event" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setSelectedDate(dayInfo.date)}
                >
                  <span>{dayInfo.day}</span>

                  {hasEvent && <i />}
                </button>
              );
            })}
          </div>

          <div className="calendar-selected-date">
            <div className="selected-date-heading">
              <div>
                <span>Events on</span>
                <strong>{formatSelectedDate(selectedDate)}</strong>
              </div>

              <button onClick={goToToday}>2026</button>
            </div>

            {selectedEvents.length > 0 ? (
              <div className="selected-events">
                {selectedEvents.map((eventName, index) => (
                  <div
                    className="selected-event"
                    key={`${eventName}-${index}`}
                  >
                    <div className="selected-event-line" />

                    <div>
                      <strong>{eventName}</strong>
                      <span>
                        {index === 0 ? "6:00 PM" : "7:30 PM"} • Mumbai
                      </span>
                    </div>

                    <button>Book Now</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-events">
                <CalendarDays size={18} />
                <span>No events scheduled for this date.</span>
              </div>
            )}
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="highlights-panel">
          <div className="panel-title">
            <h2>Event Highlights</h2>
          </div>

          <div className="highlight-list">
            <div className="highlight-item">
              <div className="highlight-icon blue">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>Easy Registration</strong>
                <span>Quick and secure event bookings.</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon green">
                <Ticket size={17} />
              </div>

              <div>
                <strong>Digital Passes</strong>
                <span>Hassle-free entry with QR passes.</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon orange">
                <Bell size={17} />
              </div>

              <div>
                <strong>Reminders & Alerts</strong>
                <span>Never miss an important event.</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon purple">
                <Users size={17} />
              </div>

              <div>
                <strong>Share with Family</strong>
                <span>Invite family and friends easily.</span>
              </div>
            </div>
          </div>

          <div className="app-promo">
            <div className="app-promo-content">
              <h3>
                All Events.
                <br />
                One App.
              </h3>

              <p>
                Stay updated, connected
                <br />
                and inspired everywhere.
              </p>

              <button>
                Download App <ArrowRight size={14} />
              </button>
            </div>

            <img src="/logo.png" alt="JiNANAM mobile app" />
          </div>
        </div>
      </section>

      {/* CREATE EVENT BANNER */}
      <section className="create-event-banner">
        <img
          src="/images/Namaste1.png"
          alt=""
          className="create-banner-background"
        />

        <div className="create-event-overlay" />

        <div className="create-event-content">
          <h2>Create. Share. Celebrate Together.</h2>

          <p>Organize events that bring communities closer.</p>

          <div className="create-event-actions">
            <button className="create-primary-button">
              Create an Event <ArrowRight size={15} />
            </button>

            <button className="create-secondary-button">
              Explore More Events <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER IS INTENTIONALLY NOT INCLUDED HERE.
          Keep your existing navbar and footer unchanged. */}
    </main>
  );
}
