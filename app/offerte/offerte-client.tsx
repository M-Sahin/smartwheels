'use client'

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

export function OfferteClient() {
  const [showOtherService, setShowOtherService] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    otherService: '',
    aantal: '',
    maat: '',
    merk: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).slice(0, 5)
      setSelectedFiles(filesArray)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormState({ ...formState, [id]: value });
  };

  const handleServiceChange = (service: string) => {
    setFormState({ ...formState, service });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value);
      });
      selectedFiles.forEach((file) => {
        formData.append('photos', file);
      });
      const res = await fetch('/api/send-offerte', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || 'Er is iets misgegaan. Probeer het opnieuw.');
      }
    } catch (err) {
      setError('Er is iets misgegaan. Probeer het opnieuw.');
    }
    setLoading(false);
  };

  return (
    <Card className="bg-zinc-100 border-zinc-300">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Contactgegevens</h2>

            <div>
              <Label htmlFor="name" className="text-zinc-900">
                Naam
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                className="bg-white border-zinc-300 text-zinc-900"
                placeholder="Uw volledige naam"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-zinc-900">
                E-mailadres
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="bg-white border-zinc-300 text-zinc-900"
                placeholder="uw.email@voorbeeld.nl"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-zinc-900">
                Telefoonnummer
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formState.phone}
                onChange={handleChange}
                className="bg-white border-zinc-300 text-zinc-900"
                placeholder="06 12345678"
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Details van de Dienst</h2>

            <div>
              <Label className="text-zinc-900 mb-3 block">Kies de gewenste dienst(en)</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="poedercoaten" />
                  <label htmlFor="poedercoaten" className="text-zinc-900 cursor-pointer">
                    Poedercoaten
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cnc" />
                  <label htmlFor="cnc" className="text-zinc-900 cursor-pointer">
                    CNC Afdraaien
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="richten" />
                  <label htmlFor="richten" className="text-zinc-900 cursor-pointer">
                    Richten
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ontlakken" />
                  <label htmlFor="ontlakken" className="text-zinc-900 cursor-pointer">
                    Ontlakken & Stralen
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="reparatie" />
                  <label htmlFor="reparatie" className="text-zinc-900 cursor-pointer">
                    Reparatie
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="anders" onCheckedChange={(checked) => setShowOtherService(checked as boolean)} />
                  <label htmlFor="anders" className="text-zinc-900 cursor-pointer">
                    Anders
                  </label>
                </div>
                {showOtherService && (
                  <Input
                    id="otherService"
                    type="text"
                    value={formState.otherService}
                    onChange={handleChange}
                    className="bg-white border-zinc-300 text-zinc-900 mt-2"
                    placeholder="Beschrijf de gewenste dienst"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Wheel Specifications */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Velg Specificaties</h2>

            <div>
              <Label htmlFor="aantal" className="text-zinc-900">
                Aantal velgen
              </Label>
              <Select value={formState.aantal} onValueChange={(value) => handleSelectChange('aantal', value)}>
                <SelectTrigger id="aantal" className="bg-white border-zinc-300 text-zinc-900">
                  <SelectValue placeholder="Selecteer aantal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="anders">Anders</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="maat" className="text-zinc-900">
                Velgmaat (in inches)
              </Label>
              <Select value={formState.maat} onValueChange={(value) => handleSelectChange('maat', value)}>
                <SelectTrigger id="maat" className="bg-white border-zinc-300 text-zinc-900">
                  <SelectValue placeholder="Selecteer maat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15"</SelectItem>
                  <SelectItem value="16">16"</SelectItem>
                  <SelectItem value="17">17"</SelectItem>
                  <SelectItem value="18">18"</SelectItem>
                  <SelectItem value="19">19"</SelectItem>
                  <SelectItem value="20">20"</SelectItem>
                  <SelectItem value="21">21"</SelectItem>
                  <SelectItem value="22+">22+"</SelectItem>
                  <SelectItem value="anders">Anders</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="merk" className="text-zinc-900">
                Merk en type auto/velg (optioneel)
              </Label>
              <Input
                id="merk"
                type="text"
                value={formState.merk}
                onChange={handleChange}
                className="bg-white border-zinc-300 text-zinc-900"
                placeholder="Bijv. BMW 3-serie, OZ Racing"
              />
            </div>
          </div>

          {/* Photo Upload */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Foto's Uploaden</h2>

            <div>
              <Label htmlFor="photos" className="text-zinc-900">
                Upload foto's van de schade of uw huidige velgen (Max. 5 foto's)
              </Label>
              <div className="mt-2">
                <label
                  htmlFor="photos"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-2 text-zinc-500" />
                    <p className="mb-2 text-sm text-zinc-700">
                      <span className="font-semibold">Klik om te uploaden</span> of sleep bestanden hierheen
                    </p>
                    <p className="text-xs text-zinc-500">PNG, JPG of JPEG (MAX. 5 bestanden)</p>
                  </div>
                  <input
                    id="photos"
                    type="file"
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-zinc-700">{selectedFiles.length} bestand(en) geselecteerd:</p>
                  <ul className="text-xs text-zinc-600 mt-1">
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-sm text-zinc-600 mt-2">
                Duidelijke foto's helpen ons de beste offerte te maken.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Omschrijving</h2>

            <div>
              <Label htmlFor="description" className="text-zinc-900">
                Aanvullende opmerkingen of omschrijving van de schade/wens
              </Label>
              <Textarea
                id="description"
                rows={5}
                value={formState.description}
                onChange={handleChange}
                className="bg-white border-zinc-300 text-zinc-900"
                placeholder="Beschrijf hier eventuele specifieke wensen of details over de schade..."
              />
            </div>
          </div>

          {/* Status Messages */}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Uw offerte is succesvol verzonden! Wij nemen zo snel mogelijk contact met u op.
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
          >
            {loading ? 'Bezig met verzenden...' : 'Offerte Aanvragen'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}