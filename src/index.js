import {get} from 'lodash'

const fn = () => get({a: {b: 1}}, 'a.b', 0)
