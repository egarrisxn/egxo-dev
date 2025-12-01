import QRCodeGenerator from '@/components/tools/qr/qr-generator'

export default function QRGeneratorPage() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center">
        <QRCodeGenerator />
      </div>
    </div>
  )
}
