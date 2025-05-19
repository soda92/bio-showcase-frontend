export  default function Primer() {
  return (
    <div>
      <link rel="stylesheet" href="{% static 'primer/style.css' %}" />

      <form action="{% url 'primer:design' %}" method="get" id="form1">
        <fieldset>
          <legend>
            <h1>Primer design</h1>
          </legend>
          {/* {% if error_message %}<p><strong>{{error_message}}</strong></p> */}
          {/* {% endif %} */}

          {/* {% if result %} */}
          <label for="sequence">DNA Sequence</label>
          <input type="text" name="sequence" value="{{result.sequence}}" />

          <label for="seq_start">Sequence start</label>
          <input type="number" name="seq_start" value="{{result.seq_start}}" />
          <label for="sequence">Sequence end</label>
          <input type="number" name="seq_end" value="{{result.seq_end}}" />
          {/* {% else %} */}
          <label for="sequence">DNA Sequence</label>
          <textarea name="sequence" id="" required cols={40} rows={10}>
          </textarea>

          <label for="seq_start">Sequence start</label>
          <input type="number" name="seq_start" required />
          <label for="sequence">Sequence end</label>
          <input type="number" name="seq_end" required />
          {/* {% endif %} */}
        </fieldset>
      </form>
      {/* {% if result %} */}
      <button id="clear">Clear</button>
      {/* {% else %} */}
      <button id="fill_demo">Fill demo sequence</button>
      {/* {% endif %} */}
      <input type="submit" form="form1" value="Design" />

      {/* {% if result %} */}
      <h2>Left primers</h2>
      <table>
        <tr>
          <th></th>
          <th>Sequence</th>
          <th>GC percent</th>
        </tr>
        {
          /* {% for primer in r.primers_left %}
    <tr>
        <td> {{forloop.counter}}</td>
        <td>{{ primer.sequence }}</td>
        <td>{{primer.gc_percent}}</td>
    </tr>
    {% endfor %} */
        }
      </table>

      <h2>Right primers</h2>
      <table>
        <tr>
          <th></th>
          <th>Sequence</th>
          <th>GC percent</th>
        </tr>
        {
          /* {% for primer in r.primers_right %}
    <tr>
        <td> {{forloop.counter}}</td>
        <td>{{ primer.sequence }}</td>
        <td>{{primer.gc_percent}}</td>
    </tr>
    {% endfor %} */
        }
      </table>

      <h2>Internal primers</h2>
      <table>
        <tr>
          <th></th>
          <th>Sequence</th>
          <th>GC percent</th>
        </tr>
        {
          /* {% for primer in r.primers_internal %}
    <tr>
        <td> {{forloop.counter}}</td>
        <td>{{ primer.sequence }}</td>
        <td>{{primer.gc_percent}}</td>
    </tr>
    {% endfor %} */
        }
      </table>
      {/* {% endif %} */}

      <script src="{% static 'primer/index.js' %}"></script>
    </div>
  );
}
