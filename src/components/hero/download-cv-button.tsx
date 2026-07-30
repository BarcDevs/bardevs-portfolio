import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

const DownloadCvButton = ({}) => {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/Bar%20Cohen%20-%20Resume.pdf'
        link.download = 'Bar Cohen - Resume.pdf'
        link.click()
    }

    return (
        <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent"
            onClick={handleDownload}
        >
            <Download className="h-4 w-4"/>
            Download CV
        </Button>
    )
}

export default DownloadCvButton