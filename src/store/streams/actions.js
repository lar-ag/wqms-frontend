
const LATENCY = 16

const testStreams = [
  {
    number: 1,
    name: '#1',
    desc: 'Stream1 desc',
    id: 1,
    activated: false,
    delay: 2
  },
  {
    number: 2,
    name: '#2',
    desc: 'Stream1 desc',
    id: 2,
    activated: false,
    delay: 2
  },
  {
    number: 3,
    name: '#3',
    desc: 'Stream3 desc',
    id: 3,
    activated: false,
    delay: 2
  },
  {
    number: 4,
    name: '#4',
    desc: 'Stream4 desc',
    id: 4,
    activated: false,
    delay: 2
  },
  {
    number: 5,
    name: '#5',
    desc: 'Stream5 desc',
    id: 5,
    activated: false,
    delay: 2
  },
  {
    number: 6,
    name: '#6',
    desc: 'Stream6 desc',
    id: 6,
    activated: false,
    delay: 2
  }
]

function getAllStreams (cb) {
  setTimeout(() => {
    cb(testStreams)
  }, LATENCY)
}

export function fetchAll (context) {
  getAllStreams(streams => {
    context.commit('updateAll', streams)
  })
}
