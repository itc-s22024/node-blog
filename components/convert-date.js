import { faTimeline } from '@fortawesome/free-solid-svg-icons'
import { parseIso, format, parseISO } from 'date-fns'
import ja from 'date-fns/locale/ja'

const ConverDate = ({dateISO}) =>
    <time dateTime={dateISO}>
        {format(parseISO(dateISO),'yyyy年MM月dd日',{locale: ja,
        })}
    </time>

export default ConverDate