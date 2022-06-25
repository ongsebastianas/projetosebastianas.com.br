// A API do Wordpress retorna, para alguns campos, o seguinte modelo:
// { "rendered": "html aqui" }
export type RenderedProp = {
  rendered: string
}

export type Guid = RenderedProp
