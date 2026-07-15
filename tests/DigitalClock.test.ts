describe('DigitalClock', () => {
  let clock;

  beforeEach(() => {
    // Initialize clock for each test
    clock = require('../src/DigitalClock').new({
      format: '24h',
      timezones: ['UTC', 'EST', 'PST']
    });
  });

  describe('Initialization', () => {
    it('should create a clock instance', () => {
      expect(clock).toBeDefined();
    });

    it('should have correct default options', () => {
      expect(clock.format).toBe('24h');
      expect(clock.timezones).toContain('UTC');
    });

    it('should support custom options', () => {
      const customClock = require('../src/DigitalClock').new({
        format: '12h',
        timezones: ['EST', 'PST']
      });
      expect(customClock.format).toBe('12h');
    });
  });

  describe('Time Formatting', () => {
    it('should format time in 24h format', () => {
      const formatted = clock.formatTime(14, 30, 45);
      expect(formatted).toBe('14:30:45');
    });

    it('should format time in 12h format', () => {
      const clock12h = require('../src/DigitalClock').new({ format: '12h' });
      const formatted = clock12h.formatTime(14, 30, 45);
      expect(formatted).toContain('PM');
    });

    it('should handle midnight correctly', () => {
      const formatted = clock.formatTime(0, 0, 0);
      expect(formatted).toBe('00:00:00');
    });

    it('should handle noon correctly in 12h format', () => {
      const clock12h = require('../src/DigitalClock').new({ format: '12h' });
      const formatted = clock12h.formatTime(12, 0, 0);
      expect(formatted).toContain('12:00:00');
      expect(formatted).toContain('PM');
    });
  });

  describe('Timezone Handling', () => {
    it('should get time in specific timezone', () => {
      const time = clock.getTimeInZone('UTC');
      expect(time).toBeDefined();
      expect(time.timezone).toBe('UTC');
      expect(time.offset).toBe(0);
    });

    it('should return formatted time', () => {
      const time = clock.getTimeInZone('UTC');
      expect(time.formatted).toBeDefined();
      expect(time.formatted).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });

    it('should handle invalid timezone', () => {
      const time = clock.getTimeInZone('INVALID');
      expect(time).toBeNull();
    });

    it('should apply UTC offset correctly', () => {
      const utcTime = clock.getTimeInZone('UTC');
      const estTime = clock.getTimeInZone('EST');
      expect(estTime.offset).toBe(-5);
    });
  });

  describe('Multiple Timezones', () => {
    it('should get all times', () => {
      const times = clock.getAllTimes();
      expect(times.length).toBe(3);
    });

    it('should have correct timezone names', () => {
      const times = clock.getAllTimes();
      const tzNames = times.map(t => t.timezone);
      expect(tzNames).toContain('UTC');
      expect(tzNames).toContain('EST');
      expect(tzNames).toContain('PST');
    });
  });

  describe('Custom Timezones', () => {
    it('should add custom timezone', () => {
      clock.addTimezone('CUSTOM', 3.5);
      const time = clock.getTimeInZone('CUSTOM');
      expect(time).toBeDefined();
      expect(time.offset).toBe(3.5);
    });

    it('should remove timezone', () => {
      clock.removeTimezone('PST');
      const times = clock.getAllTimes();
      const tzNames = times.map(t => t.timezone);
      expect(tzNames).not.toContain('PST');
    });
  });

  describe('Format Switching', () => {
    it('should switch from 24h to 12h', () => {
      clock.setFormat('12h');
      expect(clock.format).toBe('12h');
    });

    it('should throw error for invalid format', () => {
      expect(() => {
        clock.setFormat('INVALID');
      }).toThrow();
    });
  });

  describe('Display Methods', () => {
    it('should generate display string', () => {
      const display = clock.getDisplayString();
      expect(display).toBeDefined();
      expect(display).toContain('Digital Clock');
      expect(display).toContain('UTC');
    });

    it('should not throw when displaying', () => {
      expect(() => {
        clock.display();
      }).not.toThrow();
    });
  });

  describe('Callbacks', () => {
    it('should register update callback', () => {
      let called = false;
      clock.onUpdate(() => {
        called = true;
      });
      expect(called).toBe(false);
    });
  });
});
