import { throttle } from '@/utils'

export const resourcePath = {
  data: {
    path: ''
  },
  created () {
    this.setResourcePath()
  },
  methods: {
    setResourcePath () {
      const resourcePathEl = document.getElementById('resource-path')
      if (resourcePathEl) {
        this.path = resourcePathEl.getAttribute('data-path')
      }
    }
  }
}

export const screenWidth = {
  data () {
    return {
      screenWidth: 0,
      screen: ''
    }
  },
  mounted () {
    let setScreenWidth = throttle(this.setScreenWidth, 400)
    window.addEventListener('resize', () => {
      setScreenWidth()
    })
    this.setScreenWidth()
  },
  methods: {
    setScreenWidth () {
      const width = window.innerWidth
      this.screenWidth = width
      this.screen = width < 640
        ? 'phone-only' : width < 900
          ? 'phone' : width < 1200
            ? 'tablet' : 'desktop'
    }
  }
}

export const prettyNum = {
  methods: {
    prettyNum (str) {
      str = '' + str
      return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }
  }
}

export const declension = {
  methods: {
    declension (number, titles) {
      let cases = [1, 0, 2, 2, 2, 1]
      return titles[ (number % 100 > 4 && number % 100 < 20) ? 1 : cases[(number % 10 < 5) ? number % 10 : 5] ]
    }
  }
}

export const mapScroll = {
  data () {
    return {
      isTouch: false
    }
  },
  watch: {
    '$root.isTouch': function () {
      if (this.$root.isTouch) {
        this.map.behaviors.disable(['drag'])
      }
    }
  },
  created () {
    window.addEventListener('touchstart', this.setTouch, false)
  },
  methods: {
    setTouch () {
      this.isTouch = true
      window.removeEventListener('touchstart', this.setTouch, false)
    },
    setMapListener () {
      this.map.behaviors.disable(['scrollZoom'])
      this.map.controls.events.add('fullscreenenter', (e) => {
        this.map.behaviors.enable(['scrollZoom', 'drag'])
      })
      this.map.controls.events.add('fullscreenexit', (e) => {
        this.map.behaviors.disable(['scrollZoom'])
        if (this.$root.isTouch) {
          this.map.behaviors.disable(['drag'])
        }
      })
    }
  }
}